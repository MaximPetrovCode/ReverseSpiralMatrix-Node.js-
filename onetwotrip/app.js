const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


var matrix = createMatrix(3);
var result = getReverseSpiralForm(matrix); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/setSize',function(req,res){
    console.log(req.body.text);

    matrix = createMatrix(req.body.text);
    result = getReverseSpiralForm(matrix);     

    res.write('<html>');
    res.write('<body>');
    res.write('<h1>');
    res.write('<form>');
    res.write('<label>');
    res.write('Set size for matrix:');
    res.write('</label>');
    res.write('<input type="text">');
    res.write('<button type="button" >Set</button>');
    res.write('</form>');
    res.write('<p>Matrix (2*size - 1):</p>');

    for (var i = 0; i<matrix.length;i++){
        for (var j=0; j<matrix[i].length;j++){
            res.write(matrix[i][j].toString()+' ');
        }
        res.write('<br />');
    }

    res.write('<p> Center point is ' + matrix[(matrix.length-1)/2][(matrix.length-1)/2] + '</p>');
    res.write('<p>Result:</p>');    
    res.write('<p> ' + result.toString() + '</p>');
    res.write('</h1>');
    res.write('<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>');
    res.write('<script src="javascript/setSize.js"></script>');
    res.write('</body>');
    res.write('</html>');

    res.end();
});

app.get('/',function(req, res){
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>');
    res.write('<form>');
    res.write('<label>');
    res.write('Set size for matrix:');
    res.write('</label>');
    res.write('<input type="text">');
    res.write('<button type="button" >Set</button>');
    res.write('</form>');
    res.write('<p>Matrix (2*size - 1):</p>');

    for (var i = 0; i<matrix.length;i++){
        for (var j=0; j<matrix[i].length;j++){
            res.write(matrix[i][j].toString()+' ');
        }
        res.write('<br />');
    }

    res.write('<p> Center point is ' + matrix[(matrix.length-1)/2][(matrix.length-1)/2] + '</p>');
    res.write('<p>Result:</p>');    
    res.write('<p> ' + result.toString() + '</p>');
    res.write('</h1>');
    res.write('<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>');
    res.write('<script src="javascript/setSize.js"></script>');
    res.write('</body>');
    res.write('</html>');
    res.end(); 
});

app.listen('3000',function(req,res){
    console.log("It's ready on 3000");
});

function createMatrix(n){
    var size = 2*n-1
    var matrix = [];
    for (var i = 0 ; i < size; i++) {
        matrix[i] = [];
        for (var j = 0; j <size; j++) {
            matrix[i][j] = Math.floor(Math.random()*10);
        }
    }
    return matrix;
}

function getReverseSpiralForm(matrix){
    // arry for result
    var result = []; 
     
    // k - starting row index
    // l - starting column index
    k = 0, l = 0;
    var i = 0;
     
    // Counter for result array
    var z = 0;
     
    var m = matrix.length;
    var n = matrix.length;
    // Total number of elements in matrix
    var size = m*n;

    while (k < m && l < n)
        {
            // Current value
            var val;
             
            for (i = l; i < n; ++i)
            {
                val = matrix[k][i];
                result[z] = val;
                ++z;
            }
            k++;
     
            for (i = k; i < m; ++i)
            {
                val = matrix[i][n-1];
                result[z] = val;
                ++z;
            }
            n--;
     
            if ( k < m)
            {
                for (i = n-1; i >= l; --i)
                {
                    val = matrix[m-1][i];
                    result[z] = val;
                    ++z;
                }
                m--;
            }
     
            if (l < n)
            {
                for (i = m-1; i >= k; --i)
                {
                    val = matrix[i][l];
                    result[z] = val;
                    ++z;
                }
                l++;
            }
        }
        return result.reverse();
}