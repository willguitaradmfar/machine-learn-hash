var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
        Layer = synaptic.Layer,
        Network = synaptic.Network,
        Trainer = synaptic.Trainer,
        Architect = synaptic.Architect;


var hand9 = function () {
    var bins = [];
    for (var i = 0; i < 9; i++) {
        bins.push(0);
    }
    for (var i in arguments) {
        bins[arguments[i] - 1] = 1;
    }

    return bins;
};

var hand18 = function () {
    var bins = [];
    for (var i = 0; i < 18; i++) {
        bins.push(0);
    }
    for (var i in arguments) {
        bins[arguments[i] - 1] = 1;
    }

    return bins;
};

var maior = function (n) {
    return (n > .5 ? 1 : 0);
}

var velha = function (r) {
    console.log(maior(r[0]), '|', maior(r[1]), '|', maior(r[2]));
    console.log(maior(r[3]), '|', maior(r[4]), '|', maior(r[5]));
    console.log(maior(r[6]), '|', maior(r[7]), '|', maior(r[9]));

    console.log('===============================')
};


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

var myPerceptron = new Perceptron(18, 10, 9);

var error = .3;

for (var i = 0; i < 100000; i++) {

    myPerceptron.activate(hand18());
    myPerceptron.propagate(error, hand9(9));
    myPerceptron.activate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(5));
    myPerceptron.activate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(1));
    myPerceptron.activate([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(3));
    myPerceptron.activate([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(7));
    myPerceptron.activate([1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(4));
    myPerceptron.activate([1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(8));

    myPerceptron.activate(hand18());
    myPerceptron.propagate(error, hand9(5));
    myPerceptron.activate([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(6));
    myPerceptron.activate([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(3));
    myPerceptron.activate([0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(7));
    myPerceptron.activate([0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]);
    myPerceptron.propagate(error, hand9(1));
    myPerceptron.activate([1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]);
    myPerceptron.propagate(error, hand9(9));
    myPerceptron.activate([1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1]);
    myPerceptron.propagate(error, hand9(2));
    myPerceptron.activate([1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1]);

    myPerceptron.activate(hand18());
    myPerceptron.propagate(error, hand9(8));
    myPerceptron.activate([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(5));
    myPerceptron.activate([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(7));
    myPerceptron.activate([0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(9));
    myPerceptron.activate([0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(1));
    myPerceptron.activate([1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(4));
    myPerceptron.activate([1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(6));
    myPerceptron.activate([1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(2));
    myPerceptron.activate([1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(3));

    myPerceptron.activate(hand18());
    myPerceptron.propagate(error, hand9(6));
    myPerceptron.activate([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(5));
    myPerceptron.activate([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(3));
    myPerceptron.activate([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    myPerceptron.propagate(error, hand9(9));
    myPerceptron.activate([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(1));
    myPerceptron.activate([1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(2));
    myPerceptron.activate([1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(8));
    myPerceptron.activate([1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1]);
    myPerceptron.propagate(error, hand9(7));
    myPerceptron.activate([1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1]);
    myPerceptron.propagate(error, hand9(4));

}


velha(myPerceptron.activate(hand18()));

velha(myPerceptron.activate(hand18(1, 14)));

velha(myPerceptron.activate(hand18(5)));

velha(myPerceptron.activate(hand18(14)));

velha(myPerceptron.activate(hand18(7, 14)));


velha(myPerceptron.activate(hand18(10)));

velha(myPerceptron.activate(hand18(10, 5, 18)));


velha(myPerceptron.activate(hand18(5, 18, 3, 10)));