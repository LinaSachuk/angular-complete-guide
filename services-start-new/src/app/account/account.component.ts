import { Component, Input } from "@angular/core";
import { Loggingservice } from "../logging.service";
import { AccountService } from "./account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [Loggingservice],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: Loggingservice,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.loggingService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status);
  }
}
