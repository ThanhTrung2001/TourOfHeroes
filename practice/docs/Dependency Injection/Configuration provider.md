# Configuration provider
Chỉ định bí danh của provider
-----------------------------

Nếu cần chỉ định service class như 1 provider token, default behavior - hành vi mặc định là để cho injector khởi tạo lớp đó sử dụng toán tử new

Ví dụ LoggerService được cung cấp trong Provider để sử dụng

```text-plain
providers: [LoggerService]
```

Nhưng, chúng ta cũng có thể configure DI để sử dụng 1 lớp khác / 1 số value/giá trị khác để liên kết với LoggerService Ví dụ nhưu ở đây là useClass

```text-plain
[{ provide: Logger, useClass: LoggerService }
```

### **provide** 

*   là property giữ klaays token - bí danh như một key cho cả việc locating dependency value/định vị một phụ thuộc và cấu hình injector

### **Provider specific type**

#### useClass

```text-plain
[{ provide: Logger, useClass: BetterLogger }]
```

Như đã nói, Logger là key để chugns ta inject vào các component/service nhằm thực hiện dependency injection, và dù khai báo private logger: Logger, thì ở đó ta vẫn sử dụng hàm trong BetterLogger

#### useExisting

```text-plain
[ NewLogger,
  // Alias OldLogger w/ reference to NewLogger
  { provide: OldLogger, useExisting: NewLogger}]
```

ở đây, chugns ta sẽ khai báo NewLogger là 1 service, sau đó là provider configuration → Khi inject OldLogger, chugns ta sẽ dùng của NewLogger

#### useValue

```text-plain
const loggerInstance = {
  log: (message: string) => {
    console.log(`Custom Logger: ${message}`);
  }
};

// Trong NgModule
providers: [
  { provide: Logger, useValue: loggerInstance }
]
```

→ Khi inject useLogger → chugns ta sử dụng instance thay thế là loggerInstance value

#### useFactory

```text-plain
@Injectable()
class Config {
  apiUrl: string;
}

function loggerFactory(config: Config): Logger {
  return new Logger(config.apiUrl);
}

// Trong NgModule
providers: [
  Config,
  { provide: Logger, useFactory: loggerFactory, deps: [Config] }
]
```

Ở đây ta sử dụng useFactory để cung cấp một factory function loggerFactory để tạo ra một instance của Logger. Factory function này sử dụng Config để lấy thông tin cấu hình và trả về một instance của Logger.

Sử dụng InjectionToken Object
-----------------------------

Định nghĩa và sử dụng một InjectionToken cho các dependencies non-class - không thuộc class.

```text-plain
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
```

Optional type parameter, `<AppConfig>`, và token description, `app.config`, chỉ định rõ mục đích của token

Sau đó thì đăng ký dependency provider

```text-plain
providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
```

Cuối cùng là inject vào trong constructor

```text-plain
constructor(@Inject(APP_CONFIG) config: AppConfig) {
  this.title = config.title;
}
```