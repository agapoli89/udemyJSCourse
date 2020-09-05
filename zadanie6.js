const btn = document.querySelector('button');
const names = ["Brandy", "Foks", "Arco", "Zafir", "Zuzia", "Pimpuś", "Doran", "Figo", "Czesiu"];
const prefixs = ["Przypomnij sobie", "Wyobraź sobie"];
const prefixsHere = ["Popatrz na", "Pogłaskaj", "Pomiziaj za uszkiem"];
btn.addEventListener('click', () => {
    const randomName = Math.floor(Math.random() * names.length);
    const randomPrefix = Math.floor(Math.random() * prefixs.length);
    const randomPrefixHere = Math.floor(Math.random() * prefixsHere.length);

    if (randomName === 0 || randomName === 1) {
        document.querySelector('div').textContent = `${prefixsHere[randomPrefixHere]} pieska o imieniu: ${names[randomName]}`;
    } else {
        document.querySelector('div').textContent = `${prefixs[randomPrefix]} pieska o imieniu: ${names[randomName]}`;
    }
})