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
    square_x: 0,
    square_y: 0,
    editor: {
        currentTool: null,
        currentColor: '#000',
        currentBrushSize: 10,
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
            if (e.target.dataset.tool === 'clearCnv') {
                this._clear();
            }
            else if (e.target.dataset.tool != 'Color' & e.target.dataset.tool != 'BrushSize') {
                this.editor.currentTool = e.target.dataset.tool;
            }
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
        else if(this.editor.currentTool === 'fill') {
            this._fill();
        }
        else if(this.editor.currentTool === 'eraser') {
            this._eraser();
        }
        else if(this.editor.currentTool === 'square') {
            this.square_x = this.x;
            this.square_y = this.y;
            this._square();
        };
//        else if(this.editor.currentTool === 'clearCnv') {
//            this._clear();
//        };
    },
    _end() {
        if (this.editor.currentTool === 'square') {
            this._square();
        }
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
        this.ctx.fillRect(0, 0, canv.width, canv.height);
    },

    _eraser() {
        let size = this.editor.currentBrushSize;
        this.ctx.fillStyle = '#ffffff';
        this.canvas.onmousemove = () => {
            this.ctx.fillRect(this.x, this.y, size, size);
        }
    },

    _square() {
        this.ctx.fillRect(this.square_x, this.square_y, this.x - this.square_x, this.y - this.square_y);
    },

    _clear() {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, canv.width, canv.height);
    }
}

abobe.init();

let saveButton = document.getElementById('saveImg');
let count = 1;
saveButton.addEventListener('click', function (e) {
    let dataURL = abobe.canvas.toDataURL('image/png');
    let a = document.createElement("a");
    a.href = dataURL;
    a.download = `${count}.png`;
    count++;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(dataURL);  
    }, 0); 
});