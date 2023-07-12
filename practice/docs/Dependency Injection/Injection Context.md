# Injection Context
Injector chỉ có thể sử dụng khi code được thực thi đúng context

Class constructor
-----------------

Cứ mỗi khi DI system instantiates a class - khởi tạo một lớp, tất cả được thưc hiện trong một injection context. nó sẽ được handle bởi framework. Constructor của Class được thực thi trong runtime context đó, và cho oheos inject một token-bí danh sử dụng inject function

```text-plain
class MyComponent  {
  private service1: Service1;
  private service2: Service2 = inject(Service2); // In context

  constructor() {
    this.service1 = inject(HeroService) // In context
  }
}
```

Stack frame in Context
----------------------

Một số API được thiết kế để chạy trong một injection context. Trong trường hợp, ví dụ như router guard. Nó cho phép sử dụng inject để truy cập một service trong guard function

```text-plain
const canActivateTeam: CanActivateFn =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
return inject(PermissionsService).canActivate(inject(UserToken), route.params.id);
};
```

Run within an injection context
-------------------------------

Khi bạn muốn chạy một function đã cho trong một injection context mà hiện đang không ở trong injection context đó, sử dụng runInInjectionContext.

Nhưng yêu cầu phải có quyền truy cập vào một injector cụ thể đã cho như EnvirontmentEnjector

```text-plain
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private environmentInjector = inject(EnvironmentInjector);

  someMethod() {
    runInInjectionContext(this.environmentInjector, () => {
      inject(SomeService); // Do what you need with the injected service
    });
  }
}
```

Note : inject() sẽ chỉ return 1 instance chỉ khi injector có thể xử lsy được token cần thiết

Asserts the context
-------------------

Angular cung cấp  [`assertInInjectionContext`](https://angular.io/api/core/assertInInjectionContext) helper function nhằm xác nhận lại context hiện tại là một injection context 

Using DI outside of a context
-----------------------------

Gọi inject() hay assertInjectionContext outside injection context sẽ trả lỗi [error NG0203](https://angular.io/errors/NG0203).