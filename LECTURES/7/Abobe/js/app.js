let container = document.querySelector('#app');
let canv = document.querySelector('#canv');
let tools = document.querySelector('#tools');
let coordinates = document.querySelector('.coordinates');

// let ctx = canvas.getContext('2d');

let abobe = {
    app: container,
    canvas: canv,
    tools: tools,
    coordinates: coordinates,
    ctx: null,
    x: 0,
    y: 0,
    editor: {
        currentTool: null,
        currentColor: '#000',
        currentBrushSize: 10,
        // currentFont: 'Arial'
    },

    init() {
        this.ctx = this.canvas.getContext('2d');
        this._handleEvents();
    },
    _getCoordinates(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;

        document.querySelector('#xCoord').innerText = this.x;
        document.querySelector('#yCoord').innerText = this.y;
    },
    _handleEvents() {
        this.tools.addEventListener('change', this._changeHandler.bind(this));
        this.tools.addEventListener('click', this._clickHandler.bind(this));

        this.canvas.addEventListener('mousemove', this._moveHandler.bind(this));
        this.canvas.addEventListener('mousedown', this._start.bind(this));
        this.canvas.addEventListener('mouseup', this._end.bind(this));
    },
    _clickHandler(e) {
        if(e.target.name === 'save') {
            this._save();
        }

        if(e.target.name === 'tool') {
            this.editor.currentTool = e.target.dataset.tool;
        }
    },
    _changeHandler(e) {
        if(e.target.name === 'tool') {
            this.editor[`current${e.target.dataset.tool}`] = e.target.value;
        }
    },
    _moveHandler(e) {
        if(e.target.id === 'canv') {
            this._getCoordinates(e);
        }
    },
    _start() {
        this.ctx.fillStyle = this.editor.currentColor;

        if(this.editor.currentTool === 'pencil') {
            this._pencil();
        }

        if(this.editor.currentTool === 'fill') {
            this._fill();
        }
        if(this.editor.currentTool === 'eraser') {
            this._eraser();
        }
        if(this.editor.currentTool === 'square') {
            this._square();
        }
        if(this.editor.currentTool === 'clear') {
            this._clear();
        }
    },
    _end() {
        this.canvas.onmousemove = null;
    },
    //draw methods
    _pencil() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.fillRect(this.x, this.y, size, size);
        }
    },
    _fill() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    _eraser() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.clearRect(this.x, this.y, size, size);
        }
    },
    _square() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.beginPath();
            this.ctx.strokeRect(this.x, this.y, size, size);
            this.ctx.fill();
            this.ctx.strokeStyle = this.editor.currentColor;
            this.ctx.stroke();
        }
    },
    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.height);
    },
    _save() {

    }
}

abobe.init();