export default async function() {
  function helloWorld(parent, params, context, info) {
    return "Hello world!";
  }

  this.Query.hello = helloWorld;
}
