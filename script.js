let count = 1;

document.getElementById("count-btn").onclick = async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let result;
    try {
      [{result}] = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => getSelection().toString(),
      });
    } catch (e) {
      return; // ignoring an unsupported page like chrome://extensions
    }

    result = result.trim();

    for(var i=0 ; i<result.length ; i++){
        if(result[i] == ' '){
            count += 1;
        }
    }
    document.body.append('Count is : ' + count);
  };