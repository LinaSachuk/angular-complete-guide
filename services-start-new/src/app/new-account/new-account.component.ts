import { Component } from "@angular/core";
import { AccountService } from "../account/account.service";
import { Loggingservice } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers: [Loggingservice],
})
export class NewAccountComponent {
  constructor(
    private loggingService: Loggingservice,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
  }
}
