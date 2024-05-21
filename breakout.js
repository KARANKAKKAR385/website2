* {
    box-sizing: border-box;
}

body {
    background-color: #141414;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: cursive;
}

canvas {
    background: black;
    display: block;
    border-radius: 5px;
}

h1 {
    font-size: 45px;
    color: white;
}

.btn {
    cursor: pointer;
    border: 0;
    padding: 10px 20px;
    background: white;
    color: black;
    border-radius: 5px;
}

.btn:hover {
    background: #222222;
}

.btn:active {
    transform: scale(0.98);
}

.rules-btn {
    position: absolute;
    top: 30px;
    left: 30px;
}

.rules {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333333;
    color: white;
    min-height: 100vh;
    width: 400px;
    padding: 20px;
    line-height: 1.5;
    transform: translateX(-400px);
    transition: transform 1s ease-in-out;
}

.rules.show {
    transform: translateX(0);
}
