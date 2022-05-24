// Front-App
const nino = document.querySelector('.nino');
const nina = document.querySelector('.nina');
const generator = document.querySelector('.avatar-generator');
const avatar = document.getElementById('avatar-generator');
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const ending = document.querySelector('#tema1 .section2 a');

back.addEventListener('click', () => {
    avatar.classList.remove('active');
    localStorage.clear();
});
ending.addEventListener('click', () => {
    localStorage.clear();
});
const generatorOpen = () => {
    avatar.classList.add('active');
    generator.classList.add('active');
}
const ecutAll = document.querySelectorAll('.eye-cut');
const ecutSelect = document.querySelectorAll('.eye-cut .select');
const ncutAll = document.querySelectorAll('.nose-cut');
const ncutSelect = document.querySelectorAll('.nose-cut .select');
const mcutAll = document.querySelectorAll('.mouth-cut');
const mcutSelect = document.querySelectorAll('.mouth-cut .select');
const hcutAll = document.querySelectorAll('.hair-cut');
const hcutSelect = document.querySelectorAll('.hair-cut .select');
let fullBody, fullBodyRun, fullBodyRead, fullBodyPray, svgInfo_string, svg_Object;

nino.addEventListener('click', () => {
    generatorOpen();
    fullBody = './Images/avatar/nino/1.svg';
    fullBodyRun = './Images/avatar/nino/2.svg';
    fullBodyRead = './Images/avatar/nino/3.svg';
    fullBodyPray = './Images/avatar/nino/4.svg';
    fetchSvg(fullBody, 'full-body', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nino/c1.svg', 'face', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nino/Ojos.svg', 'eyes', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nino/nariz.svg', 'noses', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nino/boca-1.svg', 'mouth', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nino/Ojos.svg', 'ojos1', '#front-app .eye-cut-1');
    fetchSvg('./Images/avatar/nino/ojos2.svg', 'ojos2', '#front-app .eye-cut-2');
    fetchSvg('./Images/avatar/nino/ojos3.svg', 'ojos3', '#front-app .eye-cut-3');
    fetchSvg('./Images/avatar/nino/nariz.svg', 'noses', '#front-app .nose-cut-1');
    fetchSvg('./Images/avatar/nina/niña-nariz.svg', 'noses', '#front-app .nose-cut-2');
    fetchSvg('./Images/avatar/nino/boca-1.svg', 'boca1', '#front-app .mouth-cut-1');
    fetchSvg('./Images/avatar/nino/boca-2.svg', 'boca2', '#front-app .mouth-cut-2');
    fetchSvg('./Images/avatar/nino/boca-3.svg', 'boca3', '#front-app .mouth-cut-3');
    fetchSvg('./Images/avatar/nino/c1.svg', 'c1', '#front-app .hair-cut-1');
    fetchSvg('./Images/avatar/nino/c2.svg', 'c2', '#front-app .hair-cut-2');
    fetchSvg('./Images/avatar/nino/c3.svg', 'c3', '#front-app .hair-cut-3');

    ecutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    ecutSelect[0].classList.add('active');
    ecutAll.forEach((ecut) => {
        ecut.classList.remove('active');
    })
    ecutAll[0].classList.add('active');

    ncutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    ncutSelect[0].classList.add('active');
    ncutAll.forEach((ncut) => {
        ncut.classList.remove('active');
    })
    ncutAll[0].classList.add('active');

    mcutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    mcutSelect[0].classList.add('active');
    mcutAll.forEach((mcut) => {
        mcut.classList.remove('active');
    })
    mcutAll[0].classList.add('active');

    hcutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    hcutSelect[0].classList.add('active');
    hcutAll.forEach((hcut) => {
        hcut.classList.remove('active');
    })
    hcutAll[0].classList.add('active');
    hcutAll[hcutAll.length - 1].classList.add('din');
});
nina.addEventListener('click', () => {
    generatorOpen();
    fullBody = './Images/avatar/nina/1.svg';
    fullBodyRun = './Images/avatar/nina/2.svg';
    fullBodyRead = './Images/avatar/nina/3.svg';
    fullBodyPray = './Images/avatar/nina/4.svg';
    fetchSvg(fullBody, 'full-body', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nina/niña1_Mesa de trabajo 1.svg', 'face', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nina/niña-ojos-1.svg', 'eyes', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nina/niña-nariz.svg', 'noses', '#front-app .avatar-generator');
    fetchSvg("./Images/avatar/nina/niña-boca-1.svg", 'mouth', '#front-app .avatar-generator');
    fetchSvg('./Images/avatar/nina/niña-ojos-1.svg', 'ojos1', '#front-app .eye-cut-1');
    fetchSvg('./Images/avatar/nina/niña-ojos-2.svg', 'ojos2', '#front-app .eye-cut-2');
    fetchSvg('./Images/avatar/nina/niña-ojos-3.svg', 'ojos3', '#front-app .eye-cut-3');
    fetchSvg('./Images/avatar/nina/niña-nariz.svg', 'noses', '#front-app .nose-cut-1');
    fetchSvg('./Images/avatar/nino/nariz.svg', 'noses', '#front-app .nose-cut-2');
    fetchSvg("./Images/avatar/nina/niña-boca-1.svg", 'boca1', '#front-app .mouth-cut-1');
    fetchSvg("./Images/avatar/nina/niña-boca-2.svg", 'boca2', '#front-app .mouth-cut-2');
    fetchSvg("./Images/avatar/nina/niña-boca-3.svg", 'boca3', '#front-app .mouth-cut-3');
    fetchSvg('./Images/avatar/nina/niña1_Mesa de trabajo 1.svg', 'c1', '#front-app .hair-cut-1');
    fetchSvg('./Images/avatar/nina/niña2_Mesa de trabajo 1.svg', 'c2', '#front-app .hair-cut-2');
    fetchSvg('./Images/avatar/nina/niña3.svg', 'c3', '#front-app .hair-cut-3');
    fetchSvg('./Images/avatar/nina/niña4.svg', 'c4', '#front-app .hair-cut-4');

    ecutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    ecutSelect[0].classList.add('active');
    ecutAll.forEach((ecut) => {
        ecut.classList.remove('active');
    })
    ecutAll[0].classList.add('active');

    ncutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    ncutSelect[0].classList.add('active');
    ncutAll.forEach((ncut) => {
        ncut.classList.remove('active');
    })
    ncutAll[0].classList.add('active');

    mcutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    mcutSelect[0].classList.add('active');
    mcutAll.forEach((mcut) => {
        mcut.classList.remove('active');
    })
    mcutAll[0].classList.add('active');

    hcutSelect.forEach((select) => {
        select.classList.remove('active')
    })
    hcutSelect[0].classList.add('active');
    hcutAll.forEach((hcut) => {
        hcut.classList.remove('active');
    })
    hcutAll[0].classList.add('active');
    hcutAll[hcutAll.length - 1].classList.remove('din');
});

const localStorageInfo = (gender, run, read, pray) => {
    let ecutActive = document.querySelector('.eye-cut.active');
    let ncutActive = document.querySelector('.nose-cut.active');
    let mcutActive = document.querySelector('.mouth-cut.active');
    let hcutActive = document.querySelector('.hair-cut.active');
    let hcActive = document.querySelector('.hc.active');
    let ecActive = document.querySelector('.ec.active');
    let scActive = document.querySelector('.sc.active');
    let ucActive = document.querySelector('.uc.active');
    let ucsActive = document.querySelector('.ucs.active');
    const svgnfo = {
        fullBody: gender,
        runBody: run,
        readBody: read,
        prayBody: pray,
        eyes: ecutActive.children[1].dataset.eye,
        nose: ncutActive.children[1].dataset.nose,
        mouth: mcutActive.children[1].dataset.mouth,
        face: hcutActive.children[1].dataset.face,
        hair: hcActive.dataset.background,
        eye: ecActive.dataset.background,
        skin: scActive.dataset.background,
        upperUniform: ucActive.dataset.background,
        lowerUniform: ucsActive.dataset.background
    }

    svgInfo_string = JSON.stringify(svgnfo);

}

next.addEventListener('click', () => {
    localStorage.setItem('avatar', svgInfo_string);
});


let eyeStyleWithHair, noseStyleWithHair, mouthStyleWithHair, faceStyleWithHair, hcColor, ecColor, scColor, ucColor, ucsColor;

ecutAll.forEach((ecut, index) => {
    ecut.addEventListener('click', () => {
        ecutSelect.forEach((select) => {
            select.classList.remove('active')
        })
        ecutSelect[index].classList.add('active');
        ecutAll.forEach((ecut) => {
            ecut.classList.remove('active');
        })
        ecut.classList.add('active');
        eyeStyleWithHair = ecut.children[1].dataset.eye;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        fetchSvg(eyeStyleWithHair, 'eyes', '#front-app .avatar-generator');
    })
});
ncutAll.forEach((ncut, index) => {
    ncut.addEventListener('click', () => {
        ncutSelect.forEach((select) => {
            select.classList.remove('active')
        })
        ncutSelect[index].classList.add('active');
        ncutAll.forEach((ncut) => {
            ncut.classList.remove('active');
        })
        ncut.classList.add('active');
        noseStyleWithHair = ncut.children[1].dataset.nose;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        fetchSvg(noseStyleWithHair, 'noses', '#front-app .avatar-generator');
    })
});
mcutAll.forEach((mcut, index) => {
    mcut.addEventListener('click', () => {
        mcutSelect.forEach((select) => {
            select.classList.remove('active')
        })
        mcutSelect[index].classList.add('active');
        mcutAll.forEach((mcut) => {
            mcut.classList.remove('active');
        })
        mcut.classList.add('active');
        mouthStyleWithHair = mcut.children[1].dataset.mouth;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        fetchSvg(mouthStyleWithHair, 'mouth', '#front-app .avatar-generator');
    })
});
hcutAll.forEach((hcut, index) => {
    hcut.addEventListener('click', () => {
        hcutSelect.forEach((select) => {
            select.classList.remove('active')
        })
        hcutSelect[index].classList.add('active');
        hcutAll.forEach((hcut) => {
            hcut.classList.remove('active');
        })
        hcut.classList.add('active');
        faceStyleWithHair = hcut.children[1].dataset.face;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        fetchSvg(faceStyleWithHair, 'face', '#front-app .avatar-generator');
    })
});

const hcAll = document.querySelectorAll('.hc');
const hcSelect = document.querySelectorAll('.hc .select');
hcAll.forEach((hc, index) => {
    hc.addEventListener('click', () => {
        hcSelect.forEach((select) => {
            select.classList.remove('active')
        })
        hcSelect[index].classList.add('active');
        hcAll.forEach(hc => {
            hc.classList.remove('active');
        })
        hc.classList.add('active');
        hcColor = hc.dataset.background;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        colorSvg(hcColor, ecColor, scColor, ucColor, ucsColor);
    })
})

const ecAll = document.querySelectorAll('.ec');
const ecSelect = document.querySelectorAll('.ec .select');

ecAll.forEach((ec, index) => {
    ec.addEventListener('click', () => {
        ecSelect.forEach((select) => {
            select.classList.remove('active')
        })
        ecAll.forEach(ec => {
            ec.classList.remove('active');
        })
        ec.classList.add('active');
        ecSelect[index].classList.add('active');
        ecColor = ec.dataset.background;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        colorSvg(hcColor, ecColor, scColor, ucColor, ucsColor);
    })
})

const scAll = document.querySelectorAll('.sc');
const scSelect = document.querySelectorAll('.sc .select');

scAll.forEach((sc, index) => {
    sc.addEventListener('click', () => {
        scSelect.forEach((select) => {
            select.classList.remove('active')
        })
        scAll.forEach(sc => {
            sc.classList.remove('active');
        })
        sc.classList.add('active');
        scSelect[index].classList.add('active');
        scColor = sc.dataset.background;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        colorSvg(hcColor, ecColor, scColor, ucColor, ucsColor);
    })
})

const ucAll = document.querySelectorAll('.uc');
const ucSelect = document.querySelectorAll('.uc .select');

ucAll.forEach((uc, index) => {
    uc.addEventListener('click', () => {
        ucSelect.forEach((select) => {
            select.classList.remove('active')
        })
        ucAll.forEach(uc => {
            uc.classList.remove('active');
        })
        uc.classList.add('active');
        ucSelect[index].classList.add('active');
        ucColor = uc.dataset.background;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        colorSvg(hcColor, ecColor, scColor, ucColor, ucsColor);
    })
})

const ucsAll = document.querySelectorAll('.ucs');
const ucsSelect = document.querySelectorAll('.ucs .select');

ucsAll.forEach((ucs, index) => {
    ucs.addEventListener('click', () => {
        ucsSelect.forEach((select) => {
            select.classList.remove('active')
        })
        ucsAll.forEach(ucs => {
            ucs.classList.remove('active');
        })
        ucs.classList.add('active');
        ucsSelect[index].classList.add('active');
        ucsColor = ucs.dataset.background;
        localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        colorSvg(hcColor, ecColor, scColor, ucColor, ucsColor);
    })
})



// Avatar Generator

const fetchSvg = (svg, element, parent) => {
    fetch(svg)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then((doc) => {
            if (doc.documentElement.classList.contains(element)) {
                const svgs = document.querySelectorAll(`${parent}>svg`);
                svgs.forEach(svg => {
                    if (svg.classList.contains(element)) {
                        svg.remove();
                    }
                })
                document.querySelector(parent).append(doc.documentElement);
            } else {
                console.log('svg is not found');
            }
            colorSvg(hcColor, ecColor, scColor, ucColor, ucsColor);
            localStorageInfo(fullBody, fullBodyRun, fullBodyRead, fullBodyPray);
        });
};
const fetchSvgTema = (svg, element, parent) => {
    fetch(svg)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then((doc) => {
            if (doc.documentElement.classList.contains(element)) {
                const svgs = document.querySelectorAll(`${parent}>svg`);
                svgs.forEach(svg => {
                    if (svg.classList.contains(element)) {
                        svg.remove();
                    }
                })
                document.querySelector(parent).append(doc.documentElement);
            } else {
                console.log('svg is not found');
            }
            colorSvg(svg_Object.hair, svg_Object.eye, svg_Object.skin, svg_Object.upperUniform, svg_Object.lowerUniform);
        });
};


function colorSvg(hair, eye, skin, upperUniform, lowerUniform) {
    const path = document.querySelectorAll('path,g,circle,svg');
    path.forEach(p => {
        if (p.classList.contains('hair')) {
            p.style.fill = hair;
        }
        if (p.classList.contains('eye')) {
            p.style.fill = eye;
        }
        if (p.classList.contains('skin')) {
            p.style.fill = skin;
        }
        if (p.classList.contains('upper-uniform')) {
            p.style.fill = upperUniform;
        }
        if (p.classList.contains('lower-uniform')) {
            p.style.fill = lowerUniform;
        }
    })
}



// Tema 1

// TABS
const tabs = Array.from(document.querySelectorAll('.tabLink'));
const contents = Array.from(document.querySelectorAll('.days-content'));
const puzzle_contents = Array.from(document.querySelectorAll('.puzzle-content'));
const day1_puzzle_fields = document.querySelector('#day1 .puzzle-field');
const day3_puzzle_fields = document.querySelector('#day3 .puzzle-field');
const day4_puzzle_fields = document.querySelector('#day4 .puzzle-field');
const day6_puzzle_fields = document.querySelector('#day6 .puzzle-field');
let activeTab = document.querySelector('.tabLink.active');
let activeContent = document.querySelector('.days-content.active');
let activeTabIndex = tabs.indexOf(activeTab);
let activeContentIndex = contents.indexOf(activeContent);


// Drag And Drop and tab change after drop.

let img = document.querySelectorAll('.img');
let area = document.querySelectorAll('.dragarea');
let dragItem = null;

for (let i of img) {
    i.ondragstart = dragStart;
    i.ondragend = dragEnd;
}

function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0);
}

function dragEnd() {
    dragItem = null;
    setTimeout(() => this.style.display = "block", 0);
}

for (let x of area) {
    x.ondragover = dragOver;
    x.ondragenter = dragEnter;
    x.ondragleave = dragLeave;
    x.ondrop = Drop;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    this.style.border = 'none';
}

function tabChange() {
    if (puzzle_contents[activeContentIndex].childElementCount === 1) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabs[activeTabIndex + 1].classList.add('active');
        activeTab = document.querySelector('.tabLink.active');
        activeTabIndex = tabs.indexOf(activeTab);
        contents.forEach((content) => {
            content.classList.remove('active');
        });

        contents[activeContentIndex + 1].classList.add('active');
        activeContent = document.querySelector('.days-content.active');
        activeContentIndex = contents.indexOf(activeContent);
    }
}

function Drop(event) {
    this.append(dragItem);
    event.preventDefault();
    day1_puzzle_fields.classList.add('activeLight');
    document.querySelector('.haya').classList.add('active');
    if (day3_puzzle_fields.childElementCount === 2) {
        day3_puzzle_fields.classList.add('activeGreenish');
        document.querySelector('.junto1').style.display = 'none';
        document.querySelector('.junto2').style.display = 'block';
        const herbs = document.querySelectorAll('.img-herb');
        herbs.forEach((herb) => {
            herb.classList.add('active');
        })
    }
    if (day4_puzzle_fields.childElementCount === 8) {
        day4_puzzle_fields.classList.add('glow');
        document.querySelector('.puso1').style.display = 'none';
        document.querySelector('.puso2').style.display = 'block';
        setTimeout(tabChange, 2000);
    }
    if (day6_puzzle_fields.childElementCount === 22) {
        document.querySelector('.tierra2').style.display = 'block';
        setTimeout(function() {
            document.querySelector('.les').style.display = 'block';
            document.querySelector('.y').style.display = 'block';
        }, 2000);
        svg_Object = JSON.parse(localStorage.avatar);
        fetchSvgTema(svg_Object.fullBody, 'full-body', '#tema1 #day6');
        fetchSvgTema(svg_Object.face, 'face', '#tema1 #day6');
        fetchSvgTema(svg_Object.eyes, 'eyes', '#tema1 #day6');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema1 #day6');
        fetchSvgTema(svg_Object.mouth, 'mouth', '#tema1 #day6');
    }
    if (activeTabIndex === 0) {
        setTimeout(tabChange, 2000);
    } else if (activeTabIndex < 3) {
        tabChange();
    } else if (activeTabIndex > 3) {
        tabChange();
    }
}

// Tema 1
/* =================================================================================== */

// Tema 2
// ====================================================================================

// Activated 1

// Link Phrase

const tema_2 = document.getElementById("tema2").onload = () => {
    if (localStorage.avatar !== undefined) {
        svg_Object = JSON.parse(localStorage.avatar);
        fetchSvgTema(svg_Object.fullBody, 'full-body', '#tema2 #part-1');
        fetchSvgTema(svg_Object.face, 'face', '#tema2 #part-1');
        fetchSvgTema(svg_Object.eyes, 'eyes', '#tema2 #part-1');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema2 #part-1');
        fetchSvgTema(svg_Object.mouth, 'mouth', '#tema2 #part-1');
        fetchSvgTema(svg_Object.fullBody, 'full-body', '#tema2 #part-2');
        fetchSvgTema(svg_Object.face, 'face', '#tema2 #part-2');
        fetchSvgTema(svg_Object.eyes, 'eyes', '#tema2 #part-2');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema2 #part-2');
        fetchSvgTema(svg_Object.mouth, 'mouth', '#tema2 #part-2');
        fetchSvgTema(svg_Object.fullBody, 'full-body', '#tema2 #part-3');
        fetchSvgTema(svg_Object.face, 'face', '#tema2 #part-3');
        fetchSvgTema(svg_Object.eyes, 'eyes', '#tema2 #part-3');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema2 #part-3');
        fetchSvgTema(svg_Object.mouth, 'mouth', '#tema2 #part-3');
    }
}
tema_2();
const phrases = Array.from(document.getElementsByClassName('phrase'));
const leftPhrases = Array.from(document.getElementsByClassName("left-phrase"));
const rightPhrases = Array.from(document.getElementsByClassName("right-phrase"));
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let matchedHeading = document.getElementById('matched-heading');

window.onload = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
}

phrases.forEach((phrase, index) => {
    phrase.addEventListener('click', () => {
        phrases[index].classList.toggle('check-phrase');
        check();
        var checkingConditionMatching = setInterval(function() {
            if (document.querySelectorAll('.phrase.correct').length === 12) {
                document.querySelector('.matching-phrase .phrase-arrow').classList.add('open');
            }
        }, 100);

        function stopChecking() {
            clearInterval(checkingConditionMatching);
        }

        setTimeout(stopChecking, 500);
    })
})

const check = () => {
    leftPhrases.forEach((leftPhrase, index) => {
        rightPhrases.forEach((rightPhrase, index) => {
            let leftPhraseWidth = leftPhrase.getBoundingClientRect().width;
            let leftPhraseHeight = leftPhrase.getBoundingClientRect().height;
            let x1 = leftPhrase.getBoundingClientRect().x + leftPhraseWidth;
            let y1 = leftPhrase.getBoundingClientRect().y + window.scrollY + (leftPhraseHeight / 2);
            let x2 = rightPhrase.getBoundingClientRect().x;
            let y2 = rightPhrase.getBoundingClientRect().y + window.scrollY + (leftPhraseHeight / 2);
            rightPhrase.addEventListener('click', function() {
                if (leftPhrase.dataset.checker === rightPhrase.dataset.checker && leftPhrase.classList.contains("check-phrase") && rightPhrase.classList.contains("check-phrase")) {
                    (canvas_arrow(ctx, x1, y1, x2, y2, ''));
                    setTimeout(function() {
                        leftPhrase.classList.remove('check-phrase');
                        leftPhrase.classList.add('correct');
                        rightPhrase.classList.add('correct');
                    }, 300)
                } else {
                    (canvas_arrow(ctx, 0, 0, 0, 0, ''));
                    setTimeout(function() {
                        rightPhrase.classList.remove('check-phrase');
                        leftPhrase.classList.remove('check-phrase');
                    }, 300)
                }
            })
        })
    })
}

const canvas_arrow = (context, fromx, fromy, tox, toy, confirmation) => {
    const headlen = 10;
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    context.beginPath();
    context.lineWidth = "2";
    context.strokeStyle = "red";
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
    context.fill();
    context.closePath();
    matchedHeading.innerHTML = confirmation;
}

// Activated 2

// Changing Color

coloring();

function coloring() {
    const paths = document.querySelectorAll('#part-3 path', '#part-3 circle');
    const dropArea = document.querySelector('#part-3 .droparea');
    const colorPicker = document.querySelector("input");
    const pickingElement = document.querySelector('#part-3 .picking-element');
    paths.forEach((path, index) => {
        path.addEventListener('click', (event) => {
            event.stopPropagation();
            paths.forEach((path, index) => {
                path.classList.remove('pickToColor');
                if (dropArea.classList.contains('pickToColor')) {
                    dropArea.classList.remove('pickToColor');
                }
            })
            if (paths[index].classList.contains('pickToColor')) {
                paths[index].classList.remove('pickToColor');
                pickingElement.textContent = "Pick something to color first";
            } else if (dropArea.classList.contains('pickToColor')) {
                pickingElement.textContent = "White-Board is selected to color";
            } else {
                paths[index].classList.add('pickToColor');
                pickingElement.textContent = paths[index].parentNode.parentNode.dataset.name + " is selected to color";
            }
            colorPicker.addEventListener('click', (event) => {
                event.stopPropagation();
            })
            colorPicker.addEventListener('input', (event) => {
                event.stopPropagation();
                if (path.classList.contains('pickToColor')) {
                    paths[index].setAttribute('fill', colorPicker.value);
                    pickingElement.style.color = colorPicker.value;
                } else {
                    if (dropArea.classList.contains('pickToColor')) {
                        pickingElement.textContent = "White-Board is selected to color";
                    } else {
                        pickingElement.textContent = "Pick something to color first"
                    }
                }
            })
        })
    })
    colorPicker.addEventListener('click', (event) => {
        event.stopPropagation();
    })
    dropArea.addEventListener('click', () => {
        paths.forEach((path) => {
            path.classList.remove('pickToColor');
        })
        if (dropArea.classList.contains('pickToColor')) {
            dropArea.classList.remove('pickToColor');
            pickingElement.textContent = 'Pick Something to color first';
        } else {
            dropArea.classList.add('pickToColor');
            pickingElement.textContent = dropArea.dataset.name + ' is selected to color';
        }
    })
    colorPicker.addEventListener('input', (event) => {
        event.stopPropagation();
        if (dropArea.classList.contains('pickToColor')) {
            dropArea.style.background = colorPicker.value;
            pickingElement.style.color = "#ffffff";
        }
    })
}
// #Drag And Drop SVGSVGElement

const container = document.querySelector('.dragarea');
container.addEventListener('pointerdown', userPressed, { passive: true });
const dropArea = document.querySelector('.droparea');
const dropAreaBox = dropArea.getBoundingClientRect();
const part3Box = document.getElementById('part-3').getBoundingClientRect();
let bbox, pbox, startX, startY, deltaX, deltaY, raf;

function userPressed(event) {
    element = event.target.parentElement.parentElement;
    if (element.classList.contains('draggable')) {
        startX = event.clientX;
        startY = event.clientY;
        bbox = element.getBoundingClientRect();
        pbox = element.parentElement.getBoundingClientRect();
        container.addEventListener('pointermove', userMoved, { passive: true });
        container.addEventListener('pointerup', userReleased, { passive: true });
        container.addEventListener('pointercancel', userReleased, { passive: true });
    };
};

function userMoved(event) {
    // if no previous request for animation frame - we allow js to proccess 'move' event:
    if (!raf) {
        deltaX = event.clientX - startX;
        deltaY = event.clientY - startY;
        raf = requestAnimationFrame(userMovedRaf);
    }
};




function userMovedRaf() {
    element.style.transform = "translate3d(" + deltaX + "px," + deltaY + "px, 0px)";
    // once the paint job is done we 'release' animation frame variable to allow next paint job:
    raf = null;
};

function userReleased(event) {
    container.removeEventListener('pointermove', userMoved);
    container.removeEventListener('pointerup', userReleased);
    container.removeEventListener('pointercancel', userReleased);
    // if animation frame was scheduled but the user already stopped interaction - we cancel the scheduled frame:
    if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
    };
    element.style.transform = "translate3d(0px,0px,0px)";
    element.style.left = bbox.left + deltaX - pbox.left + "px";
    element.style.top = bbox.top + deltaY - pbox.top + "px";
    if (dropAreaBox.left - part3Box.left < event.clientX && event.clientX < dropAreaBox.left - part3Box.left + dropAreaBox.width && dropAreaBox.top < event.clientY && event.clientY < dropAreaBox.top + dropAreaBox.height) {
        element.style.left = bbox.left + deltaX - pbox.left + "px";
        element.style.top = bbox.top + deltaY - pbox.top + "px";
        if (element.parentElement.classList.contains('white-img')) {
            dropArea.append(element);
            element.style.left = bbox.left + deltaX - dropArea.getBoundingClientRect().left + 10 + "px";
            element.style.top = bbox.top + deltaY - dropArea.getBoundingClientRect().top + 10 + "px";
            dropArea.style.border = "2px solid #00ff00";
            setTimeout(() => {
                dropArea.style.border = "none";
            }, 1000);
        }
        if (dropArea.childElementCount === 9) {
            document.querySelector('.inst2-tema-2 .insta-2nd').classList.add('show');
            document.querySelector('.white-img .boat').classList.add('draggable');
        }
        if (dropArea.childElementCount === 10) {
            document.querySelector('.white-img .regresar img').classList.add('show');
        }
    }
    deltaX = deltaY = null;
};
// Tema2
// ========================================================================================

// Tema3
// ========================================================================================

const tema_3 = document.getElementById("tema3").onload = () => {
    if (localStorage.avatar !== undefined) {
        svg_Object = JSON.parse(localStorage.avatar);
        fetchSvgTema(svg_Object.fullBody, 'full-body', '#tema3 #part1');
        fetchSvgTema(svg_Object.face, 'face', '#tema3 #part1');
        fetchSvgTema(svg_Object.eyes, 'eyes', '#tema3 #part1');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema3 #part1');
        fetchSvgTema(svg_Object.mouth, 'mouth', '#tema3 #part1');
        fetchSvgTema(svg_Object.fullBody, 'full-body', '#tema3 #part4');
        fetchSvgTema(svg_Object.face, 'face', '#tema3 #part4');
        fetchSvgTema(svg_Object.eyes, 'eyes', '#tema3 #part4');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema3 #part4');
        fetchSvgTema(svg_Object.mouth, 'mouth', '#tema3 #part4');
        fetchSvgTema(svg_Object.runBody, 'full-body', '#tema3 #part2 .cheerful-boy-1');
        fetchSvgTema(svg_Object.face, 'face', '#tema3 #part2 .cheerful-boy-1');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema3 #part2 .cheerful-boy-1');
        fetchSvgTema(svg_Object.readBody, 'full-body', '#tema3 #part2 .cheerful-boy-2');
        fetchSvgTema(svg_Object.face, 'face', '#tema3 #part2 .cheerful-boy-2');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema3 #part2 .cheerful-boy-2');
        fetchSvgTema(svg_Object.prayBody, 'full-body', '#tema3 #part2 .cheerful-boy-3');
        fetchSvgTema(svg_Object.face, 'face', '#tema3 #part2 .cheerful-boy-3');
        fetchSvgTema(svg_Object.nose, 'noses', '#tema3 #part2 .cheerful-boy-3');
    }
}
tema_3();

// Activaded1

const tema3 = document.querySelector('#tema3');
const joyboy_buttons = document.querySelectorAll('.part .joyboy-button');
const runs = document.querySelectorAll('.cheerful-boy-1');
const reads = document.querySelectorAll('.cheerful-boy-2');
const prays = document.querySelectorAll('.cheerful-boy-3');
const scrollPoint = tema3.scrollHeight;

function joyboyActivity(index) {
    if (joyboy_buttons[index].classList.contains('open')) {
        joyboy_buttons[index].classList.remove('open');
    } else {
        joyboy_buttons.forEach((jb) => {
            jb.setAttribute('disabled', '');
            setTimeout(() => {
                jb.removeAttribute('disabled', '');
            }, 5000);
        })
        joyboy_buttons[index].classList.add('open');
    }
    if (tema3.classList.contains('open')) {
        tema3.classList.remove('open');
    } else {
        tema3.classList.add('open');
        window.scrollTo({
            top: scrollPoint,
            behavior: "smooth"
        });

        setTimeout(function() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            joyboy_buttons[index].classList.remove('open');
            joyboy_buttons[index].classList.add('opened');
        }, 5000);
        var checkConditionForArrowAppearing = setInterval(function() {
            if (document.querySelectorAll('.joyboy-button.opened').length === 3) {
                document.querySelector('.img-desc .cheerful-match').classList.add('open');
            }
        }, 100)

        function stopChecking() {
            clearInterval(checkConditionForArrowAppearing);
        }

        setTimeout(stopChecking, 5200);

        setTimeout(function() {
            tema3.classList.remove('open');
        }, 5400);
    }
}

function activitiesCondition(activity) {
    activity.forEach((r) => {
        if (r.classList.contains('open')) {
            r.classList.remove('open');
        } else {
            r.classList.add('open');
            setTimeout(() => {
                r.classList.remove('open');
            }, 5000);
        }
    });
}

joyboy_buttons[0].addEventListener('click', () => {
    joyboyActivity(0);
    fetchSvgTema(svg_Object.eyes, 'eyes', '#tema3 #part2 .cheerful-boy-1');
    fetchSvgTema(svg_Object.mouth, 'mouth', '#tema3 #part2 .cheerful-boy-1');
    activitiesCondition(runs);
})
joyboy_buttons[1].addEventListener('click', () => {
    joyboyActivity(1);
    fetchSvgTema(svg_Object.eyes, 'eyes', '#tema3 #part2 .cheerful-boy-2');
    fetchSvgTema(svg_Object.mouth, 'mouth', '#tema3 #part2 .cheerful-boy-2');
    activitiesCondition(reads);
})
joyboy_buttons[2].addEventListener('click', () => {
    joyboyActivity(2);
    fetchSvgTema(svg_Object.eyes, 'eyes', '#tema3 #part2 .cheerful-boy-3');
    fetchSvgTema(svg_Object.mouth, 'mouth', '#tema3 #part2 .cheerful-boy-3');
    fetchSvgTema('./Images/avatar/nina/nina-hand.svg', 'hand', '#tema3 #part2 .cheerful-boy-3');
    activitiesCondition(prays);
})

// Activaded 2

const animalKingdom = document.querySelector('.lifes .imgs');
const bedArea = document.querySelector('.lifes .plate-area');
const animals = animalKingdom.querySelectorAll('.img');
const bedAnimals = bedArea.querySelectorAll('.img');
const bed = bedArea.querySelector('.plate');

animals.forEach((animal, index) => {
    animal.addEventListener('click', () => {
        for (let animal of animals) {
            animal.classList.remove('vanish');
            animal.classList.remove('take-care');
            animal.classList.remove('choice-made');
        }
        animals[index].classList.add('take-care');
        animals[index].classList.add('choice-made');
        bed.classList.remove('take-care');
        if (animals[index].classList.contains('pet')) {
            bed.classList.add('take-care');
        }
        setTimeout(() => {
            animals[index].classList.add('vanish');
        }, 300);
        bedAnimals.forEach((bedAnimal, index) => {
            bedAnimal.classList.remove('take-care');
            bedAnimal.addEventListener('click', () => {
                for (let bedAnimal of bedAnimals) {
                    bedAnimal.classList.remove('take-care');
                }
                bed.classList.remove('take-care');
                animals[index].classList.remove('vanish');
                animals[index].classList.remove('take-care');
                animals[index].classList.remove('choice-made');
            })
        })
        bedAnimals[index].classList.add('take-care');
    })
})


const fruitsBasket = document.querySelector('.lifes .fruits-basket');
const fruits = fruitsBasket.querySelectorAll('.fruit');
const fruitItems = document.querySelector('.lifes .fruitsKingdom').querySelectorAll('.fruit');

fruitItems.forEach((fruitItem, index) => {
    fruitItem.addEventListener('click', () => {
        fruitItem.classList.add('takeover');
        fruits[index].classList.add('takeover');
        fruitItem.classList.add('added');
    })
});

fruits.forEach((fruit, index) => {
    fruit.addEventListener('click', () => {
        fruit.classList.remove('takeover');
        fruitItems[index].classList.remove('takeover');
        fruitItems[index].classList.remove('added');
    })
});

const plants = document.querySelectorAll('.plantKingdom .plant');
const watering = document.querySelector('.plantKingdom .water');
const waterpot = document.querySelector('.watering .water');


const waterFunc = () => {
    if (watering.classList.contains('active')) {
        const planetNumber = watering.getAttribute('class').slice(19, 20);
        watering.classList.remove(`planet${planetNumber}`);
        watering.classList.remove('active');
    } else {
        watering.classList.add('active');
        watering.classList.add('planet1');
        plants[0].classList.add('watered');
    }
};

waterpot.addEventListener('click', waterFunc);

watering.addEventListener('click', () => {
    const planetNumber = watering.getAttribute('class').slice(19, 20);
    watering.classList.remove('active');
    watering.classList.remove(`planet${planetNumber}`);
})

plants.forEach((plant, index) => {
    plant.addEventListener('click', () => {
        const planetNumber = watering.getAttribute('class').slice(19, 20);
        if (watering.classList.contains(`planet${planetNumber}`)) {
            watering.classList.remove(`planet${planetNumber}`);
            watering.classList.add('active');
            watering.classList.add(`planet${index+1}`);
            plant.classList.add('watered');
        } else {
            watering.classList.remove(`planet${planetNumber}`);
            watering.classList.add('active');
            watering.classList.add(`planet${index+1}`);
            plant.classList.add('watered');
        }
    })
})

const lifesArrow = document.querySelector('.lifes .arrow');

const toGetArrow = () => {
    if (document.querySelector('.lifes .imgs .choice-made') &&
        document.querySelector('.lifes .fruitsKingdom').querySelectorAll('.added').length === 5 &&
        document.querySelectorAll('.plantKingdom .plant.watered').length === 5) {
        lifesArrow.classList.add('active');
        var stoplookingForArrow = setTimeout(stopCheckingForArrow, 200);
    }
}

var checkForCompleting = setInterval(toGetArrow, 100);

function stopCheckingForArrow() {
    clearInterval(checkForCompleting);
};

// activaded-3

const textareas = document.querySelectorAll('#part5 textarea');
const OpinionEndingArrow = document.querySelector('#part5 .arrow');
const wns = document.querySelectorAll('#part5 .wn');

textareas.forEach((textarea, index) => {
    textarea.addEventListener('keyup', function() {
        if (textarea.value.length > textarea.minLength) {
            wns[index].innerHTML = "Impresionante";
        } else {
            wns[index].innerHTML = "escribe al menos " + (textarea.minLength - this.value.length + 1) + " palabras";
        }
        if (textareas[0].value.length > textareas[0].minLength &&
            textareas[1].value.length > textareas[1].minLength &&
            textareas[2].value.length > textareas[2].minLength) {
            OpinionEndingArrow.classList.add('active');
        }
    })
});

window.onload = setTimeout(() => {
    document.querySelector('#tema1 .section .section1').classList.add('slide');
    document.querySelector('#tema1 .section .section2').classList.add('slide');
    setTimeout(() => {
        document.querySelector('#tema1 .section2 a').classList.add('finish');
    }, 3000);
}, 3000);


// ============================================================================================================
// ============================================================================================================
// ============================================================================================================