# Hierarchies
Ví dụ
-----

Hierarchical Injectors là một tính năng cho phép việc cung cấp các dependencies (phụ thuộc) trong một cấu trúc cây phân cấp. 

Điều này có nghĩa là bạn có thể định nghĩa các dependencies ở một cấp cha và chúng có thể được sử dụng ở cấp con của cây.

Ví dụ

```text-plain

  <parent>
    <child></child>
  <parent>

```

Vậy muốn chia sẻ Service giữa parent và child thì?

→ Cung cấp service ở parent trogn provider với constructor(public service)

Phân loại
---------

### Module Injector

*   Đây là các injectors tồn tại trong phạm vi của một Angular module. Chúng được tạo ra thông qua **providers** trong metadata của module.

### ElementInjector

*   Created implicitly-khởi tạo ngầm định at each DOM element. An `ElementInjector` is empty by default unless you configure it in the `providers` property on `@`[`Directive`](https://angular.io/api/core/Directive)`()` or `@`[`Component`](https://angular.io/api/core/Component)`()`.