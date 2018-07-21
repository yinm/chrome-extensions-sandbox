function injectScript(file, node) {
  let th = document.getElementsByTagName(node)[0]
  let s = document.createElement('script')
  s.setAttribute('type', 'text/javascript')
  s.setAttribute('src', file)
  return th.appendChild(s)
}

injectScript(chrome.extension.getURL('/embedded-script.js'), 'body')
