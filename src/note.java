1. function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
} 
 muốn xài useParams vs class Component thì thêm hàm và bọc hàm này bởi Component
 export default withParams(ProductActionPage);

 2. phải start back end lên rồi front end ms sử dụng đc : json-server --watch db.json

 3. Khi chuyển trang -> chuyển link thì chỉ cần sử dụng <Link> là đc
  
4. Các bước để push code lên github 
b1 : tạo 1 project trên github
b2: git clone -> tạo 1 bản sao trên máy local bằng cách kéo code từ remote ( github) về 
ví dụ : git clone https://github.com/justmine98/bai-callapi.git
b3 : dán code vào project ms clone về 
b4 : git add . -> để add toàn bộ code vào trạng thái staging
b5: git commit -m "chú thích thay đổi"
để commit code vào local
b6: git push -> push code từ local lên remote(github)