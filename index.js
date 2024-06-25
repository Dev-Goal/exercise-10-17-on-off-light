class ElectricLamp {
  constructor(status) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }
}

class SwitchButton {
  constructor(lamp, status) {
    this.status = status;
    this.lamp = lamp;
  }
  getLamp() {
    return this.lamp;
  }

  setLamp(lamp) {
    this.lamp = lamp;
  }

  connectToLamp(Electriclamp) {
    return (this.lamp = Electriclamp);
  }
  switchOn() {
    this.lamp.status = "Đã sáng";
    return (this.status = "Bật đèn");
  }

  switchOff() {
    this.lamp.status = "Đã tắt";
    return (this.status = "Tắt đèn");
  }
}

let electricLamp_1 = new ElectricLamp(false);
let switchButton_1 = new SwitchButton(electricLamp_1, false);

for (let i = 1; i <= 10; i++) {
  document.write(
    switchButton_1.switchOn() + " - " + electricLamp_1.getStatus() + "<br>"
  );
  document.write(
    switchButton_1.switchOff() + " - " + electricLamp_1.getStatus() + "<br><br>"
  );
  // document.write("<br><br>");
}
