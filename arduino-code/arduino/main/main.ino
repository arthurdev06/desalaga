// Configuração inicial
const int pulsePin = A0;   // Entrada analógica do Pulse Sensor
int signal;                // Variável para armazenar o sinal lido

void setup() {
  Serial.begin(9600);      // Inicializa a comunicação serial
}

void loop() {
  signal = analogRead(pulsePin);  // Lê o valor do sensor (0 a 1023)
  Serial.println(signal);         // Mostra no Serial Monitor ou Serial Plotter
  delay(10);                      // Pequeno atraso para estabilizar a leitura
}
