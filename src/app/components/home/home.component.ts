import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  btnTestNetLabel = "Test Net"
  btnDevNetLabel = "Dev Net"

  timeLeft: number = 30;
  interval: any;
  isTimerRunning: boolean = false;

  walletAddress: any;
  solQty: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  transferSolToSelectedNetwork(label: any) {
    if (label === this.btnTestNetLabel) {
      this.startTimer();
    }
    if (label === this.btnDevNetLabel) {
      this.startTimer();
    }
  }


  startTimer() {
    this.isTimerRunning = true;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.btnTestNetLabel = "Next transfer in " + this.timeLeft + " sec";
        this.btnDevNetLabel = "Next transfer in " + this.timeLeft + " sec";
      }
      if (this.timeLeft === 0) {
        this.btnTestNetLabel = "Test Net";
        this.btnDevNetLabel = "Dev Net";
        this.isTimerRunning = false;
        this.pauseTimer();
      }
    }, 500)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timeLeft = 30;
  }

}
