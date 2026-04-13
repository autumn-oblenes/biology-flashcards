// State
let currentUnitIndex = 0;
let currentCardIndex = 0;

// DOM Elements
const navContainer = document.getElementById('unit-nav');
const currentUnitTitle = document.getElementById('current-unit-title');
const currentCardNumber = document.getElementById('current-card-number');
const totalCardsNum = document.getElementById('total-cards');
const cardElement = document.getElementById('flashcard');
const questionEl = document.getElementById('card-question');
const answerEl = document.getElementById('card-answer');
const qImgEl = document.getElementById('card-q-img');
const aImgEl = document.getElementById('card-a-img');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const unit1Actions = document.getElementById('unit-1-actions');
const unit2Actions = document.getElementById('unit-2-actions');
const unit3Actions = document.getElementById('unit-3-actions');
const unit4Actions = document.getElementById('unit-4-actions');
const unit5Actions = document.getElementById('unit-5-actions');
const btnSkip1 = document.getElementById('btn-skip-1');
const btnSkip17 = document.getElementById('btn-skip-17');
const btnSkip24 = document.getElementById('btn-skip-24');
const btnSkip32 = document.getElementById('btn-skip-32');
const btnSkip46 = document.getElementById('btn-skip-46');
const btnSkip120 = document.getElementById('btn-skip-120');
const btnSkip154 = document.getElementById('btn-skip-154');
const btnSkip189 = document.getElementById('btn-skip-189');
const btnSkip210 = document.getElementById('btn-skip-210');
const btnSkip235 = document.getElementById('btn-skip-235');
const btnU2Skip1 = document.getElementById('btn-u2-skip-1');
const btnU2Skip44 = document.getElementById('btn-u2-skip-44');
const btnU2Skip61 = document.getElementById('btn-u2-skip-61');
const btnU2Skip94 = document.getElementById('btn-u2-skip-94');
const btnU2Skip120 = document.getElementById('btn-u2-skip-120');
const btnU2Skip151 = document.getElementById('btn-u2-skip-151');
const btnU2Skip165 = document.getElementById('btn-u2-skip-165');
const btnU2Skip182 = document.getElementById('btn-u2-skip-182');
const btnU2Skip186 = document.getElementById('btn-u2-skip-186');
const btnU2Skip195 = document.getElementById('btn-u2-skip-195');
const btnU2Skip206 = document.getElementById('btn-u2-skip-206');
const btnU3Skip1 = document.getElementById('btn-u3-skip-1');
const btnU3Skip19 = document.getElementById('btn-u3-skip-19');
const btnU3Skip37 = document.getElementById('btn-u3-skip-37');
const btnU3Skip43 = document.getElementById('btn-u3-skip-43');
const btnU3Skip60 = document.getElementById('btn-u3-skip-60');
const btnU3Skip68 = document.getElementById('btn-u3-skip-68');
const btnU3Skip92 = document.getElementById('btn-u3-skip-92');
const btnU3Skip114 = document.getElementById('btn-u3-skip-114');
const btnU4Skip1 = document.getElementById('btn-u4-skip-1');
const btnU4Skip12 = document.getElementById('btn-u4-skip-12');
const btnU4Skip33 = document.getElementById('btn-u4-skip-33');
const btnU4Skip46 = document.getElementById('btn-u4-skip-46');
const btnU4Skip66 = document.getElementById('btn-u4-skip-66');
const btnU4Skip87 = document.getElementById('btn-u4-skip-87');
const btnU4Skip104 = document.getElementById('btn-u4-skip-104');
const btnU4Skip113 = document.getElementById('btn-u4-skip-113');
const btnU4Skip138 = document.getElementById('btn-u4-skip-138');
const btnU4Skip155 = document.getElementById('btn-u4-skip-155');
const btnU4Skip186 = document.getElementById('btn-u4-skip-186');
const btnU4Skip194 = document.getElementById('btn-u4-skip-194');
const btnU4Skip205 = document.getElementById('btn-u4-skip-205');
const btnU4Skip230 = document.getElementById('btn-u4-skip-230');
const btnU4Skip249 = document.getElementById('btn-u4-skip-249');
const btnU4Skip265 = document.getElementById('btn-u4-skip-265');
const btnU4Skip290 = document.getElementById('btn-u4-skip-290');
const btnU5Skip1 = document.getElementById('btn-u5-skip-1');
const btnU5Skip23 = document.getElementById('btn-u5-skip-23');
const btnU5Skip32 = document.getElementById('btn-u5-skip-32');
const btnU5Skip35 = document.getElementById('btn-u5-skip-35');

// Initialization
function initApp() {
    renderNavigation();
    loadUnit(0);
    
    // Event Listeners
    cardElement.addEventListener('click', flipCard);
    btnPrev.addEventListener('click', showPrevCard);
    btnNext.addEventListener('click', showNextCard);
    
    if(btnSkip1) {
        btnSkip1.addEventListener('click', () => changeCard(0));
    }
    if(btnSkip17) {
        btnSkip17.addEventListener('click', () => changeCard(16));
    }
    if(btnSkip24) {
        btnSkip24.addEventListener('click', () => changeCard(23));
    }
    if(btnSkip32) {
        btnSkip32.addEventListener('click', () => changeCard(31));
    }
    if(btnSkip46) {
        btnSkip46.addEventListener('click', () => changeCard(45));
    }
    if(btnSkip120) {
        btnSkip120.addEventListener('click', () => changeCard(119));
    }
    if(btnSkip154) {
        btnSkip154.addEventListener('click', () => changeCard(153)); // Index 153 is Card 154
    }
    if(btnSkip189) {
        btnSkip189.addEventListener('click', () => changeCard(188));
    }
    if(btnSkip210) {
        btnSkip210.addEventListener('click', () => changeCard(209));
    }
    if(btnSkip235) {
        btnSkip235.addEventListener('click', () => changeCard(234));
    }
    if(btnU2Skip1) {
        btnU2Skip1.addEventListener('click', () => changeCard(0));
    }
    if(btnU2Skip44) {
        btnU2Skip44.addEventListener('click', () => changeCard(43));
    }
    if(btnU2Skip61) {
        btnU2Skip61.addEventListener('click', () => changeCard(60));
    }
    if(btnU2Skip94) {
        btnU2Skip94.addEventListener('click', () => changeCard(93));
    }
    if(btnU2Skip120) {
        btnU2Skip120.addEventListener('click', () => changeCard(119));
    }
    if(btnU2Skip151) {
        btnU2Skip151.addEventListener('click', () => changeCard(150));
    }
    if(btnU2Skip165) {
        btnU2Skip165.addEventListener('click', () => changeCard(164));
    }
    if(btnU2Skip182) {
        btnU2Skip182.addEventListener('click', () => changeCard(181)); // Index 181 is Card 182
    }
    if(btnU2Skip186) {
        btnU2Skip186.addEventListener('click', () => changeCard(185));
    }
    if(btnU2Skip195) {
        btnU2Skip195.addEventListener('click', () => changeCard(194)); // Index 194 is Card 195
    }
    if(btnU2Skip206) {
        btnU2Skip206.addEventListener('click', () => changeCard(205)); // Index 205 is Card 206
    }
    if(btnU3Skip1) {
        btnU3Skip1.addEventListener('click', () => changeCard(0)); // Card 1 of Unit 3
    }
    if(btnU3Skip19) {
        btnU3Skip19.addEventListener('click', () => changeCard(18)); // Index 18 is Card 19
    }
    if(btnU3Skip37) {
        btnU3Skip37.addEventListener('click', () => changeCard(36)); // Index 36 is Card 37
    }
    if(btnU3Skip43) {
        btnU3Skip43.addEventListener('click', () => changeCard(42)); // Index 42 is Card 43
    }
    if(btnU3Skip60) {
        btnU3Skip60.addEventListener('click', () => changeCard(59)); // Index 59 is Card 60
    }
    if(btnU3Skip68) {
        btnU3Skip68.addEventListener('click', () => changeCard(67)); // Index 67 is Card 68
    }
    if(btnU3Skip92) {
        btnU3Skip92.addEventListener('click', () => changeCard(91)); // Index 91 is Card 92
    }
    if(btnU3Skip114) {
        btnU3Skip114.addEventListener('click', () => changeCard(113)); // Index 113 is Card 114
    }
    if(btnU4Skip1) {
        btnU4Skip1.addEventListener('click', () => changeCard(0)); // Card 1 of Unit 4
    }
    if(btnU4Skip12) {
        btnU4Skip12.addEventListener('click', () => changeCard(11)); // Index 11 is Card 12
    }
    if(btnU4Skip33) {
        btnU4Skip33.addEventListener('click', () => changeCard(32)); // Index 32 is Card 33
    }
    if(btnU4Skip46) {
        btnU4Skip46.addEventListener('click', () => changeCard(45)); // Index 45 is Card 46
    }
    if(btnU4Skip66) {
        btnU4Skip66.addEventListener('click', () => changeCard(65)); // Index 65 is Card 66
    }
    if(btnU4Skip87) {
        btnU4Skip87.addEventListener('click', () => changeCard(86)); // Index 86 is Card 87
    }
    if(btnU4Skip104) {
        btnU4Skip104.addEventListener('click', () => changeCard(103)); // Index 103 is Card 104
    }
    if(btnU4Skip113) {
        btnU4Skip113.addEventListener('click', () => changeCard(112)); // Index 112 is Card 113
    }
    if(btnU4Skip138) {
        btnU4Skip138.addEventListener('click', () => changeCard(137)); // Index 137 is Card 138
    }
    if(btnU4Skip155) {
        btnU4Skip155.addEventListener('click', () => changeCard(154)); // Index 154 is Card 155
    }
    if(btnU4Skip186) {
        btnU4Skip186.addEventListener('click', () => changeCard(185)); // Index 185 is Card 186
    }
    if(btnU4Skip194) {
        btnU4Skip194.addEventListener('click', () => changeCard(193)); // Index 193 is Card 194
    }
    if(btnU4Skip205) {
        btnU4Skip205.addEventListener('click', () => changeCard(204)); // Index 204 is Card 205
    }
    if(btnU4Skip230) {
        btnU4Skip230.addEventListener('click', () => changeCard(229)); // Index 229 is Card 230
    }
    if(btnU4Skip249) {
        btnU4Skip249.addEventListener('click', () => changeCard(248)); // Index 248 is Card 249
    }
    if(btnU4Skip265) {
        btnU4Skip265.addEventListener('click', () => changeCard(264)); // Index 264 is Card 265
    }
    if(btnU4Skip290) {
        btnU4Skip290.addEventListener('click', () => changeCard(289)); // Index 289 is Card 290
    }
    if(btnU5Skip1) {
        btnU5Skip1.addEventListener('click', () => changeCard(0)); // Card 1 of Unit 5
    }
    if(btnU5Skip23) {
        btnU5Skip23.addEventListener('click', () => changeCard(22)); // Index 22 is Card 23
    }
    if(btnU5Skip32) {
        btnU5Skip32.addEventListener('click', () => changeCard(31)); // Index 31 is Card 32
    }
    if(btnU5Skip35) {
        btnU5Skip35.addEventListener('click', () => changeCard(34)); // Index 34 is Card 35
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight' || e.key === ' ') {
            if (e.key === ' ') e.preventDefault();
            showNextCard();
        } else if (e.key === 'ArrowLeft') {
            showPrevCard();
        } else if (e.key === 'Enter') {
            flipCard();
        }
    });
}

function renderNavigation() {
    navContainer.innerHTML = '';
    qCardData.forEach((unit, index) => {
        const btn = document.createElement('button');
        btn.className = 'unit-btn';
        btn.textContent = unit.title;
        btn.onclick = () => loadUnit(index);
        navContainer.appendChild(btn);
    });
}

function loadUnit(index) {
    if(!qCardData[index]) return;
    
    // Ensure card is unflipped before changing data
    if (cardElement.classList.contains('is-flipped')) {
        cardElement.classList.remove('is-flipped');
        // Wait for flip animation to finish before swapping text to prevent seeing the answer early
        setTimeout(() => {
            applyUnitData(index);
        }, 300);
    } else {
        applyUnitData(index);
    }
}

function applyUnitData(index) {
    currentUnitIndex = index;
    currentCardIndex = 0;
    
    // Update active nav state
    document.querySelectorAll('.unit-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    const unit = qCardData[currentUnitIndex];
    currentUnitTitle.textContent = unit.title;
    totalCardsNum.textContent = unit.cards.length;
    
    // Show skip buttons for the active unit only
    if (unit1Actions) unit1Actions.style.display = (index === 0) ? 'flex' : 'none';
    if (unit2Actions) unit2Actions.style.display = (index === 1) ? 'flex' : 'none';
    if (unit3Actions) unit3Actions.style.display = (index === 2) ? 'flex' : 'none';
    if (unit4Actions) unit4Actions.style.display = (index === 3) ? 'flex' : 'none';
    if (unit5Actions) unit5Actions.style.display = (index === 4) ? 'flex' : 'none';
    
    renderCard();
}

function renderCard() {
    const unit = qCardData[currentUnitIndex];
    
    if (!unit.cards || unit.cards.length === 0) {
        questionEl.textContent = "No cards available in this unit.";
        answerEl.textContent = "";
        if (qImgEl) qImgEl.style.display = 'none';
        if (aImgEl) aImgEl.style.display = 'none';
        currentCardNumber.textContent = "0";
        btnPrev.disabled = true;
        btnNext.disabled = true;
        return;
    }
    
    const card = unit.cards[currentCardIndex];
    questionEl.textContent = card.q;
    answerEl.textContent = card.a;
    
    // Process Question Image
    if (qImgEl) {
        if (card.qImg) {
            qImgEl.src = card.qImg;
            qImgEl.style.display = 'block';
        } else {
            qImgEl.style.display = 'none';
            qImgEl.src = '';
        }
    }
    
    // Process Answer Image
    if (aImgEl) {
        if (card.aImg) {
            aImgEl.src = card.aImg;
            aImgEl.style.display = 'block';
        } else {
            aImgEl.style.display = 'none';
            aImgEl.src = '';
        }
    }
    
    currentCardNumber.textContent = currentCardIndex + 1;
    
    // Update button states
    btnPrev.disabled = currentCardIndex === 0;
    btnNext.disabled = currentCardIndex === unit.cards.length - 1;
}

function flipCard() {
    const unit = qCardData[currentUnitIndex];
    if(unit.cards.length > 0) {
        cardElement.classList.toggle('is-flipped');
    }
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        changeCard(currentCardIndex - 1);
    }
}

function showNextCard() {
    const unit = qCardData[currentUnitIndex];
    if (currentCardIndex < unit.cards.length - 1) {
        changeCard(currentCardIndex + 1);
    }
}

function changeCard(newIndex) {
    // Unflip before changing card if it's flipped
    if (cardElement.classList.contains('is-flipped')) {
        cardElement.classList.remove('is-flipped');
        setTimeout(() => {
            currentCardIndex = newIndex;
            renderCard();
        }, 300);
    } else {
        // Quick fade-out/in effect could be added here, but direct change is also fine
        currentCardIndex = newIndex;
        renderCard();
    }
}

// Start the app when styling is loaded
window.addEventListener('DOMContentLoaded', initApp);
