var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
        Layer = synaptic.Layer,
        Network = synaptic.Network,
        Trainer = synaptic.Trainer,
        Architect = synaptic.Architect;


function Perceptron(input, hidden, output)
{
    // create the layers
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    
    // connect the layers
    inputLayer.project(hiddenLayer);    
    hiddenLayer.project(outputLayer);

    // set the layers
    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var myPerceptron = new Perceptron(2, 8, 1);

var error = .3;

for (var i = 0; i < 1000000; i++) {
    myPerceptron.activate([1, 1]);
    myPerceptron.propagate(error, [.001]);

    myPerceptron.activate([1, 9]);
    myPerceptron.propagate(error, [.009]);
    
    myPerceptron.activate([2, 3]);
    myPerceptron.propagate(error, [.006]);
    
    myPerceptron.activate([2, 9]);
    myPerceptron.propagate(error, [.018]);

    myPerceptron.activate([5, 7]);
    myPerceptron.propagate(error, [.035]);

    myPerceptron.activate([5, 2]);
    myPerceptron.propagate(error, [.010]);

    myPerceptron.activate([7, 2]);
    myPerceptron.propagate(error, [.014]);
    
    myPerceptron.activate([7, 7]);
    myPerceptron.propagate(error, [.049]);

    myPerceptron.activate([9, 7]);
    myPerceptron.propagate(error, [.063]);
    
    myPerceptron.activate([9, 2]);
    myPerceptron.propagate(error, [.018]);


}



console.log(myPerceptron.activate([3, 6]));