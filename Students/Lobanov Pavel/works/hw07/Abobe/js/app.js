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
    square: {
        start_x: 0,
        start_y: 0,
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
            if (this.editor.currentTool === 'clearCnv') {
                this.ctx.fillStyle = '#ffffff';
                this._fillAll();
            }
        }
    },
    _changeHandler(e) {
        if(e.target.name === 'toolChange') {
            this.editor[`current${e.target.dataset.tool}`] = e.target.value;
        }
    },
    _moveHandler(e) {
        if(e.target.id === 'canv') {
            this._getCoordinates(e);
        }
    },
    _start() {
        if(this.editor.currentTool === 'pencil') {
            this.ctx.fillStyle = this.editor.currentColor;
            this._pencil();
        } else if (this.editor.currentTool === 'fill') {
            this.ctx.fillStyle = this.editor.currentColor;
            this._fillAll();
        } else if (this.editor.currentTool === 'eraser') {
            this._eraser();
        } else if (this.editor.currentTool === 'square') {
            this.ctx.fillStyle = this.editor.currentColor;
            this._startSquare();
        }
    },
    _end() {
        this.canvas.onmousemove = null;
        if (this.editor.currentTool === 'square') {
            this._stopSquare();
        }
    },
    
    //draw methods
    _pencil() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.fillRect(this.x, this.y, size, size);
        }
    },

    _fillAll() {
        this.ctx.fillRect(0, 0, 1000, 600);
    },

    _eraser() {
        let size = this.editor.currentBrushSize;
        this.ctx.fillStyle = '#ffffff';
        this.canvas.onmousemove = () => {
            this.ctx.fillRect(this.x, this.y, size, size);
        }
    },

    _startSquare() {
        this.square.start_x = this.x;
        this.square.start_y = this.y;
    },

    _stopSquare() {
        this.ctx.fillRect(this.square.start_x, this.square.start_y, this.x - this.square.start_x, this.y - this.square.start_y);
    }

}

abobe.init();

let saveButton = document.getElementById('saveImg');
saveButton.addEventListener('click', function (e) {
    let dataURL = abobe.canvas.toDataURL('image/png');
    let a = document.createElement("a");
    a.href = dataURL;
    a.download = 'canvas.png';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(dataURL);  
    }, 0); 
});