document.getElementById('signatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const quote = document.getElementById('quote').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const mastodonUrl = document.getElementById('mastodonUrl').value.trim();
    const mastodonUser = document.getElementById('mastodonUser').value.trim();

    const coop = document.getElementById('coop').value.trim();
    const coopPhone = document.getElementById('coopPhone').value.trim();
    const website = document.getElementById('website').value.trim();
    const coopEmail = document.getElementById('coopEmail').value.trim();
    const coopMastodonUrl = document.getElementById('coopMastodonUrl').value.trim();
    const coopMastodonUser = document.getElementById('coopMastodonUser').value.trim();
    const coopColor = document.getElementById('coopColor').value;
    const linkColor = document.getElementById('linkColor').value;
    const logoSvg = document.getElementById('logoSvg').value.trim();
    const design = document.getElementById('design').value;
    const legalText = document.getElementById('legalText').value.trim();


    // SVG Icons with dynamic fill color
    const phoneIcon = `<svg height="14" width="14" fill="${coopColor}" style="position:relative;top:1px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" /><path fill-rule="evenodd" d="M6 1a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 6 15h4a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10 1H6Zm4 1.5h-.5V3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z" clip-rule="evenodd" /></svg>`;
    const emailIcon = `<svg height="14" width="14" fill="${coopColor}" style="position:relative;top:3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>`;
    const websiteIcon = `<svg height="14" width="14" fill="${coopColor}" style="position:relative;top:2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-4"><path fill-rule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" /></svg>`;
    const mastodonIcon= `<svg height="14" width="14" fill="${coopColor}" style="position:relative;top:3px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 539.675"><path fill-rule="nonzero" d="M509.934 119.48C502.047 61.492 450.957 15.797 390.393 6.943 380.174 5.444 341.461 0 251.779 0h-.669c-89.706 0-108.95 5.444-119.169 6.943C73.064 15.552 19.296 56.613 6.25 115.283c-6.274 28.896-6.943 60.93-5.779 90.315 1.663 42.141 1.984 84.206 5.854 126.175a587.526 587.526 0 0013.962 82.76c12.4 50.284 62.598 92.13 111.779 109.203a302.928 302.928 0 00163.538 8.535 244.938 244.938 0 0017.707-4.782c13.169-4.148 28.621-8.782 39.981-16.927.154-.113.282-.262.374-.432.089-.17.138-.358.146-.549v-40.666a1.197 1.197 0 00-.465-.929 1.242 1.242 0 00-1.023-.227 457.85 457.85 0 01-106.125 12.264c-61.505 0-78.048-28.87-82.784-40.888a125.62 125.62 0 01-7.194-32.23c-.01-.186.026-.369.102-.539a1.165 1.165 0 01.834-.674c.181-.04.371-.034.552.01a449.063 449.063 0 00104.389 12.264c8.457 0 16.888 0 25.347-.219 35.366-.981 72.64-2.772 107.436-9.493.868-.173 1.736-.319 2.482-.538 54.884-10.427 107.113-43.149 112.422-126.005.199-3.264.696-34.168.696-37.555.023-11.503 3.744-81.604-.547-124.676zm-84.473 206.752H367.75V186.417c0-29.435-12.4-44.445-37.625-44.445-27.727 0-41.615 17.758-41.615 52.834v76.528h-57.363v-76.528c0-35.076-13.915-52.834-41.642-52.834-25.075 0-37.599 15.01-37.625 44.445v139.815H94.219V182.173c0-29.432 7.597-52.818 22.792-70.151 15.675-17.293 36.234-26.171 61.754-26.171 29.539 0 51.859 11.234 66.741 33.676l14.359 23.844 14.385-23.844c14.88-22.442 37.201-33.676 66.691-33.676 25.494 0 46.053 8.878 61.777 26.171 15.196 17.317 22.793 40.7 22.793 70.151l-.05 144.059z"></path></svg>`;

     // Function to load and populate the selected design
     const loadDesign = (design) => {
        fetch(`${design}.html`)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const signature = doc.querySelector('.signature-design');

                if (name) signature.querySelector('#name').textContent = name;
                if (title) signature.querySelector('#title').textContent = title;
                if (quote) signature.querySelector('#quote').textContent = quote;
                if (email) signature.querySelector('#email').innerHTML = `${emailIcon} <a style="color:${linkColor}" href="mailto:${email}">${email}</a>`;
                if (phone) signature.querySelector('#phone').innerHTML = `${phoneIcon} <a style="color:${linkColor}" href="tel:${phone}">${phone}</a>`;
                if (mastodonUrl) signature.querySelector('#mastodon').innerHTML = `${mastodonIcon} <a style="color:${linkColor}" href="${mastodonUrl}">${mastodonUser}</a>`;

                if (coop) signature.querySelector('#coop').textContent = coop;
                if (coopPhone) signature.querySelector('#coopPhone').innerHTML = `${phoneIcon} <a style="color:${linkColor}" href="tel:${coopPhone}">${coopPhone}</a>`;
                if (website) signature.querySelector('#website').innerHTML = `${websiteIcon} <a style="color:${linkColor}" href="${website}" target="_blank">${website}</a>`;
                if (coopEmail) signature.querySelector('#coopEmail').innerHTML = `${emailIcon} <a style="color:${linkColor}" href="mailto:${coopEmail}">${coopEmail}</a>`;
                if (coopMastodonUrl) signature.querySelector('#coopMastodon').innerHTML = `${mastodonIcon} <a style="color:${linkColor}" href="${coopMastodonUrl}">${coopMastodonUser}</a>`;
                if (logoSvg) signature.querySelector('#logoSvg').innerHTML = logoSvg;
                if (legalText) signature.querySelector('#legalText').innerHTML = legalText;

                const signatureOutput = document.getElementById('signatureOutput');
                signatureOutput.innerHTML = '';
                signatureOutput.appendChild(signature);

                const htmlOutput = document.getElementById('htmlOutput');
                htmlOutput.textContent = signature.innerHTML;

                document.getElementById('copyButton').style.display = 'block';
            })
            .catch(error => console.error('Error loading design:', error));
    };

    // Load and populate the selected design
    loadDesign(design);
});

// Copy HTML to Clipboard
document.getElementById('copyButton').addEventListener('click', function() {
    const htmlOutput = document.getElementById('htmlOutput').textContent;
    navigator.clipboard.writeText(htmlOutput).then(() => {
        alert('HTMLa arbelera kopiatu da');
    }).catch(err => {
        console.error('Arazoa sinadura kopiatzean: ', err);
    });
});