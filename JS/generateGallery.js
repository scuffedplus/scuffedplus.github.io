const fs = require('fs');
const path = require('path');

const imagesFolder = '/scuffedplus.github.io/Images/photo'; // Path to your folder
const outputFile = '/scuffedplus.github.io/photo.html'; // Path to your HTML file

function generateGallery() {
    const images = fs.readdirSync(imagesFolder).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });

    let galleryHTML = `
<!DOCTYPE html>
<html>
<head>
    <link href="CSS/style.css" rel="stylesheet" type="text/css" media="all">
    <script src="JS/script.js"></script>
    <title>foxgirl.fyi | photo gallery</title>
</head>
<body>
    <div class="container">
        <div class="body-content">
            <div class="artbox1">
                <div class="gallery-grid">
                    <h2> photo gallery </h2>
                    <div class="empty"></div>
                    <div class="caption">
                        <p> All photos featured here are my own. </p>
                    </div>
                </div>
                <div class="gallery-grid">
`;

    images.forEach((image, index) => {
        const className = index % 2 === 0 ? 'image-positive' : 'image-negative';

        galleryHTML += `
                    <div class="row">
                        <div class="image-container">
                            <img class="${className}" src="/Images/photo/${image}" width="2000" height="2000" loading="lazy">
                        </div>
                    </div>
        `;
    });

    galleryHTML += `
                </div>
                <div class="gallery-grid">
                    <p>All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;

    fs.writeFileSync(outputFile, galleryHTML, 'utf-8');
    console.log('Gallery HTML generated successfully!');
}

generateGallery();
