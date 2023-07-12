# Life cycle
**Configuration -Điều chỉnh/cấu hình/Tìm kiếm Dependency:**

 Đầu tiên, Angular phải được cấu hình để biết các dependency nào được sử dụng và cách chúng được cung cấp. Điều này thường được thực hiện trong module của ứng dụng bằng cách khai báo các providers (cung cấp) trong phần metadata của module. Hoặc trong chính Service với từ khóa @Inject{provideIn : root}

**Instantiation (Khởi tạo):** 

Sau khi cấu hình, Angular sẽ khởi tạo các dependency. Nếu một dependency có thể được khởi tạo mà không cần bất kỳ dependency nào khác, nó sẽ được tạo ngay lập tức. Tuy nhiên, nếu một dependency yêu cầu một dependency khác, quá trình khởi tạo sẽ tiếp tục cho đến khi tất cả các dependency đã được khởi tạo.

**Injection (Tiêm):** 

Sau khi tất cả các dependency đã được khởi tạo, Angular sẽ tiêm chúng vào các thành phần tương ứng. Điều này xảy ra thông qua các constructor injection (tiêm qua hàm khởi tạo) hoặc các property injection (tiêm qua thuộc tính).

**Lifecycle:** 

Một khi các dependency đã được tiêm vào, chúng sẽ tồn tại trong suốt vòng đời của thành phần đó. Các dependency được giữ và quản lý bởi Angular, và sẽ tồn tại cho đến khi thành phần đó bị hủy.

**Destruction (Hủy):**

 Khi một thành phần bị hủy, Angular sẽ giải phóng tài nguyên và hủy các dependency tương ứng. Điều này có thể bao gồm việc giải phóng bộ nhớ hoặc hủy kết nối đến các service bên ngoài.