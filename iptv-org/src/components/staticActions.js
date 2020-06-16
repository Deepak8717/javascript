import ClipboardJS from 'clipboard/dist/clipboard.min';

const staticActions = () => {
  document.querySelectorAll('code').forEach((i) => {
    let newNode = document.createElement('button');
    newNode.textContent = 'Copy';
    newNode.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
    i.insertAdjacentElement('beforebegin', newNode);

    const button = i.parentElement.querySelector('button');
    const clipboard = new ClipboardJS(button);
    button.setAttribute('data-clipboard-text', i.textContent);

    clipboard.on('success', (e) => {
      e.trigger.parentElement.parentElement.parentElement
        .querySelectorAll('tr')
        .forEach((i) => i.classList.remove('bg-black'));
      e.trigger.parentElement.parentElement.classList.toggle('bg-black');
    });
  });
};

export default staticActions;
