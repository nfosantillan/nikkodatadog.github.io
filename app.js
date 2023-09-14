const tracer = require('dd-trace').init({
  profiling: true,
  logInjection: true,
  runtimeMetrics: true,
  analytics: true,
//  env: 'prod',
//  service: 'nikkotry',
//  version: '1.0.3',
//  hostname: 'localhost',
//  port: '8126'
});

const addRootSpan = (name) => {
	const span = tracer.scope().active();
	if (span){
		console.log('Test ' + name);
		const parent = span.context()._trace.started[0];
		parent.sayHello('Nikko');
	}
};

function sayHello(name){
// This line must come before importing any instrumented module.

	
	addRootSpan(name);
	console.log('Hello World ' + name);
	
}


sayHello('Nikko');
module.exports = tracer;