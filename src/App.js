import './App.css';
import { neofsGetBalance, 
  neofsPutContainer, 
  neofsListContainers, 
  neofsSetEacl,
  neofsCreateBearerToken,
  neofsCreateBearerTokenEacl, 
  neofsCreateRestrictedEacl } from './neofs';
import React, { useEffect, useState, useCallback } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { PrimaryButton, IconButton } from '@fluentui/react/lib/Button';
import { MessageBar, MessageBarType } from '@fluentui/react/lib/MessageBar';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { TooltipHost} from '@fluentui/react/lib/Tooltip';
import { useId } from '@fluentui/react-hooks';

import { wallet } from '@cityofzion/neon-js';

import axios from 'axios';

initializeIcons();

const textFieldStyles = { fieldGroup: { width: 300 } };
const stackTokens = { childrenGap: 15 };

// URL of running neofs-http-gw intance
const httpGateway = "http://127.0.0.1:8080"; 

function App() {

  const [accountBalance, setBalance] = useState(0)
  const [privateKeyInput, setPrivateKeyInput] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [address, setAddress] = useState('');
  const [containerList, setContainerList] = useState([]);
  const [toastError, setToastError] = useState('');
  const [toastSuccess, setToastSuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [uploadResponse, setUploadResponse] = useState(undefined);
  const [selectedContainer, setSelectedContainer] = useState('');

  const onChangePrivateKey = useCallback(
    (event, newValue) => {
      setPrivateKeyInput(newValue || '');
      if (wallet.isWIF(newValue)) {
        setPrivateKey(newValue);
        const account = new wallet.Account(newValue);
        setAddress(account.address);
        neofsGetBalance(newValue, setBalance, setToastError);
        neofsListContainers(newValue, setContainerList, setToastError);
      }
    },
    [],
  );

  const onLogOut = useCallback(
    (event) => {
      setPrivateKeyInput('');
      setPrivateKey('');
      setAddress('');
      setBalance(0);
      setContainerList([]);
      setUploadResponse(undefined);
      setSelectedFile(undefined);
      setSelectedContainer();
    },
    [], 
  );

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // wait for container to persist, then set EACL
  const createContainerSuccess = async (cid) => {
    let awaitingPersist = true;
    setToastSuccess(`New container ${cid} pending persist`);
    for (let i = 0; i < 30 && awaitingPersist; i++) {
      // eslint-disable-next-line
      neofsListContainers(privateKey, async (containers) => {
        for (let j = 0; j < containers.length && awaitingPersist; j++) {
          if (containers[j] === cid)
          { 
            console.log("*** Found container!");
            awaitingPersist = false;
            resetToasts();
            setContainerList(containers);
            await sleep(1000);
            setToastSuccess(`New container ${cid} persisted!`);
            const table = neofsCreateRestrictedEacl(cid);
            neofsSetEacl(privateKey, table, setToastSuccess, setToastError);
            setTimeout(resetToasts, 10000);
          }
        }
      }, setToastError);
      await sleep(3000);
    }
    setToastError("Container failed to persist!")
    setTimeout(resetToasts, 10000);
  };

  const onCreateContainer = () => {
      neofsPutContainer(privateKey, createContainerSuccess, setToastError);
      setTimeout(resetToasts, 10000);
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSelectContainer = (e, selectedOption) => {
    setSelectedContainer(selectedOption.text);
  };


  const onFileUpload = () => {
    const formData = new FormData();
    const containerId = selectedContainer;
		formData.append('File', selectedFile);

    const bearerToken = neofsCreateBearerToken(privateKey, neofsCreateBearerTokenEacl(containerId))
    //console.log("Using bearer token: " + bearerToken);
    const config = {
      headers: { Authorization: `Bearer ${bearerToken}` }
    };
		axios.post(
			`${httpGateway}/upload/${containerId}`, formData, config
		)
    .then(result => { 
      setUploadResponse(result.data);
      console.log("Set upload response: " + JSON.stringify(result.data));
      setToastSuccess(`Successfully uploaded file to NeoFS`);
      setTimeout(resetToasts, 10000);
     })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        setToastError(`Error: ${error.response.data}`);
      } else {
        console.log(error.message);
        setToastError(`Error: ${error.message}`);
      }
      setTimeout(resetToasts, 10000);
    })
  };

  useEffect(() => {
    let refreshInterval = setInterval(() => {
      if (privateKey) {
        // refresh balance and container list every 20 seconds
        neofsGetBalance(privateKey, setBalance, setToastError);
        neofsListContainers(privateKey, setContainerList, setToastError);
      }
    }, 20000)
    return () => {
      clearInterval(refreshInterval);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [privateKey])

  const resetToasts = () => {
    setToastError('');
    setToastSuccess('');
  }
  const addIcon = { iconName: 'Add' };
  const tooltipId = useId('tooltip');
  const calloutProps = { gapSpace: 0 };
  const hostStyles = { root: { display: 'inline-block' } };

  return (
    <div className="App">
      <Stack tokens={stackTokens}>
      <Stack.Item align="center">
        { toastSuccess ? <MessageBar
            messageBarType={MessageBarType.success}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
          >{toastSuccess}</MessageBar>
          : ''
        }
        </Stack.Item>
        <Stack.Item align="center">
        { toastError ? <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
          >{toastError}</MessageBar>
          : ''
        }
        </Stack.Item>
        <Stack.Item align="center">
          { privateKey ? <PrimaryButton onClick={onLogOut}>Log out</PrimaryButton> :
          <TextField
            label="Log in with private key"
            value={privateKeyInput}
            onChange={onChangePrivateKey}
            styles={textFieldStyles}
          /> }
        </Stack.Item>
        { privateKey && <React.Fragment>       
           <Stack.Item align="center">
             {accountBalance === 0 ? <span>Send some GAS from {address} to the NeoFS contract (NSEawP75SPnnH9sRtk18xJbjYGHu2q5m1W) in order to begin</span> :
            <span>NeoFS Account Balance for {address}: {accountBalance}</span>
             }
          </Stack.Item>
          <Stack.Item align="center">
          {accountBalance > 0 &&
            <React.Fragment >
              <Dropdown
                styles={hostStyles}
                placeholder="Select a NeoFS container"
                onChange={onSelectContainer}
                selectedKey={selectedContainer}
                options={ containerList.map(c => { return {key: c, text: c} } ) }
              /><TooltipHost
              content="Create a new NeoFS container"
              id={tooltipId}
              calloutProps={calloutProps}
              styles={hostStyles}
            ><IconButton styles={hostStyles} onClick={onCreateContainer} iconProps={addIcon} /></TooltipHost>
            </React.Fragment> 
          }
          </Stack.Item>
          { selectedContainer &&
          <Stack.Item align="center">
            <input type="file" onChange={onFileChange} />
            <PrimaryButton onClick={onFileUpload}>Upload file</PrimaryButton>
          </Stack.Item>
          }
          <Stack.Item>
            { selectedFile && <React.Fragment>
              <div>{selectedFile.name}</div>
              <div>{selectedFile.size} bytes</div> 
              </React.Fragment>
              }
            { uploadResponse && <React.Fragment>
              <div>Uploaded: <a href={`${httpGateway}/get/${uploadResponse.container_id}/${uploadResponse.object_id}`}>{`${uploadResponse.container_id}/${uploadResponse.object_id}`}</a></div>
              <div><img alt="uploaded" width={300} src={`${httpGateway}/get/${uploadResponse.container_id}/${uploadResponse.object_id}`} /></div> 
              </React.Fragment>
            }
          </Stack.Item>
        </React.Fragment> }
      </Stack>
    </div>
  );
}

export default App;
