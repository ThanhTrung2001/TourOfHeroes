# Dependency Resolution
là quá trình tìm và cung cấp các dependencies (phụ thuộc) cần thiết cho các components hoặc services trong ứng dụng. Khi một component hoặc service yêu cầu một dependency, Angular sẽ tự động giải quyết và cung cấp nó thông qua Dependency Injection (DI).

Quá trình Dependency Resolution xảy ra như sau trong Angular:

Tạo instance:
-------------

*   Khi một component hoặc service được tạo ra, Angular sẽ tìm và giải quyết các dependencies của nó dựa trên các providers đã được khai báo.

Tìm kiếm:
---------

*   Angular sẽ tìm kiếm providers cho dependencies trong các phạm vi khác nhau, từ **component-level,** **module-level** **cho đến** **root-level.**
*   Nếu provider được tìm thấy trong phạm vi hiện tại, Angular sẽ tạo instance của dependency từ provider đó.
*   Nếu provider không được tìm thấy trong phạm vi hiện tại, Angular sẽ tiếp tục tìm kiếm ở các phạm vi cha (parent scopes).

Đưa vào constructor:
--------------------

*   Sau khi dependencies được tìm thấy và tạo instance, Angular sẽ tự động đưa chúng vào constructor của component hoặc service tương ứng.

Ví dụ:

```text-plain
import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-example',
  template: '<h1>{{ message }}</h1>',
  providers: [ExampleService]
})
export class ExampleComponent {
  message: string;

  constructor(private exampleService: ExampleService) {
    this.message = this.exampleService.getMessage();
  }
}
```

Trong ví dụ trên, **ExampleComponent** yêu cầu một instance của **ExampleService** thông qua constructor của nó. Angular sẽ tìm kiếm và cung cấp một instance của **ExampleService** từ provider đã được khai báo trong **providers** của **ExampleComponent**. Sau đó, **ExampleService** được sử dụng để lấy **message**, và **message** được hiển thị trong template của **ExampleComponent**.

Dependency Resolution trong Angular giúp giảm sự phụ thuộc giữa các components và services, và cho phép chúng ta tạo ra các ứng dụng linh hoạt và dễ bảo trì. Nó cung cấp khả năng tự động tìm kiếm và cung cấp các dependencies một cách đúng đắn, dựa trên các providers đã được khai báo trong phạm vi tương ứng.

Link để đọc hiểu kỹ hơn
-----------------------

[How Dependency Injection & Resolution Works in Angular - TekTutorialsHub](https://www.tektutorialshub.com/angular/how-dependency-injection-resolution-works-in-angular/)