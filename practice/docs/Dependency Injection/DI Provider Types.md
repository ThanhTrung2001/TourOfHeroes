# DI Provider Types
Dependency Injection (DI) providers là một phần quan trọng để cung cấp các instances của các services, dependencies và các giá trị khác cho các components hoặc các services khác trong ứng dụng.

Providers trong Angular có thể được cung cấp ở nhiều cấp độ khác nhau:

Component-level providers:
--------------------------

*   Providers có thể được khai báo trực tiếp trong phần metadata của một component bằng cách sử dụng decorator **@Component**.
*   Providers trong phạm vi component chỉ có tác dụng trong component hiện tại và các component con của nó.
*   Khi khai báo trong Component, thì một instance của Service tương ứng với 1 instance của component

Ví dụ:

```text-plain
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  providers: [ExampleService]
})
export class ExampleComponent {
  // ...
}
```

Trong ví dụ trên, **ExampleService** được khai báo là một provider trong phạm vi của component **ExampleComponent**.

Module-level providers:
-----------------------

*   Providers có thể được khai báo trong phần metadata của một module bằng cách sử dụng decorator **@NgModule**.
*   Providers trong phạm vi module có tác dụng cho tất cả các components, directives và services trong module đó.
*   Khi app chỉ có 1 module → 1 Module → 1 service instnace dùng chung 
*   Còn khi app có nhiều module → phân hóa tùy theo NgModule

Ví dụ:

```text-plain
@NgModule({
  declarations: [/* ... */],
  imports: [/* ... */],
  providers: [ExampleService],
  exports: [/* ... */]
})
export class AppModule {
  // ...
}
```

Trong ví dụ trên, **ExampleService** được khai báo là một provider trong phạm vi của module **AppModule**.

Root-level providers:
---------------------

*   Providers có thể được khai báo tại root-level bằng cách sử dụng decorator **@Injectable** và cung cấp chúng trong phần metadata của AppModule.
*   Providers ở root-level có tác dụng trên toàn bộ ứng dụng.
*   chỉ 1 instance chia sẻ cho toàn bộ component

Ví dụ:

```text-plain
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  // ...
}
```

Trong ví dụ trên, **ExampleService** được khai báo với **providedIn: 'root'** để cung cấp nó ở root-level.

Các providers có thể là các services, dependencies, hoặc giá trị khác mà bạn muốn cung cấp cho các components hoặc services khác. Angular sẽ quản lý việc khởi tạo các instances của các providers và đảm bảo chúng được cung cấp đúng và trong phạm vi thích hợp.

Một số đặc biệt
---------------

*   Với ProvidedIn trong Injector, Nếu cung cấp một Module cụ thể 

```text-plain
providedIn: UserModule;
```

→ Chỉ có thể sử dụng Service đó cho UserModule → 1 và chỉ 1 Module

→ Ngược lại thì không đúng, vì 1 Module có thể có nhiều service, cũng như 1 component vậy.