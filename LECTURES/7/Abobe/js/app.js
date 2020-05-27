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
    }
}

abobe.init();