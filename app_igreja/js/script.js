document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('msgEnviada').textContent = 'Mensagem enviada com sucesso!';
  this.reset();
});
