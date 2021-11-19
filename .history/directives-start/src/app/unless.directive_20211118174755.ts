import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (!condition) {
    } else {
    }
  }

  constructor(private templateRef: TemplateRef<any>, vcRef: ViewContainerRef) {}
}
