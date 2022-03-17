import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") signupForm: NgForm;

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  onSubmit() {
    console.log(
      "%cMyProject%cline:14%cvar",
      "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
      "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
      "color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px",
      this.signupForm
    );
  }
}
