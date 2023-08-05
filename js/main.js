let btns = document.querySelectorAll('.work .links a'),
    imgs = document.querySelectorAll('.work img');

btns.forEach((ele) => {
    ele.onclick = () => {
        // Active target btn
        activateBtn(ele);

        // Active all imgs
        activateAllImgs(imgs);

        if (ele.id != 'all') {
            // Fade other imgs
            fadeOthers(ele);
        } else {
            // Active all imgs
            activateAllImgs(imgs);

        }
    }
})

// Remove active from all btns and add it to target
function activateBtn(targetBtn) {
    btns.forEach((ele) => {
        ele.classList.remove('active');
    })
    targetBtn.classList.add('active');
}

// Activate all imgs
function activateAllImgs(imgs) {
    imgs.forEach((ele) => {
        ele.classList.remove('hidden')
    })
}

// Fade other imgs
function fadeOthers(btn) {
    imgs.forEach((img) => {
        if (img.dataset.folder != btn.id) {
            img.classList.add('hidden')
        }
    })
}

