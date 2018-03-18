chrome.commands.onCommand.addListener((command) => {
  if (command === 'toggle-pin') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const current = tabs[0]
      chrome.tabs.update(current.id, {'pinned': !current.pinned})
    })
  } else if (command === 'console') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const current = tabs[0]
      console.log(current)
    })
  }
})