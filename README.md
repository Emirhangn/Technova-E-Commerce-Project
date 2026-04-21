# 🚀 Technova E-Ticaret Platformu

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

Technova, modern web teknolojileriyle geliştirilmiş, ölçeklenebilir ve güvenli bir e-ticaret platformudur. Proje, backend tarafında Spring Boot'un gücünü, frontend tarafında ise React'in esnekliğini kullanarak tam kapsamlı, uçtan uca (E2E) test edilmiş bir alışveriş deneyimi sunar.
🌐 Canlı Demo ve Test (Live Demo)
Projeyi yerel ortamda kurmakla uğraşmadan direkt olarak canlı sunucu üzerinden test edebilirsiniz:

Canlı Uygulama Adresi: https://technova-e-commerce-project.vercel.app

Admin Paneli: https://technova-e-commerce-project.vercel.app/admin

Admin girişi bilgileri:
mail = admin@test.com
şifre = 123
## 🛠️ Kullanılan Teknolojiler
* **Backend:** Java 17, Spring Boot 3, Spring Security, Hibernate (JPA)
* **Frontend:** React.js, Vite, Tailwind CSS / Bootstrap, React Router
* **State & API Yönetimi:** Redux Toolkit, TanStack React Query, Axios Interceptors
* **Veritabanı:** PostgreSQL
* **Test & QA:** Cypress (E2E Testing), JUnit (Unit Testing)

## 🧠 Gelişmiş Frontend Mimarisi
* **Axios Interceptors:** Kullanıcı token'ları (JWT) her API isteğinde otomatik olarak header'a eklenerek akıllı ve güvenli bir kurye sistemi kurulmuştur.
* **React Query:** Sunucudan veri çekerken loading ve error stateleri otomatik yönetilmiş, gereksiz render'ların önüne geçilmiştir.
* **Redux Toolkit:** Kullanıcı oturum bilgileri (Auth) ve Sepet (Cart) işlemleri global state üzerinde performanslı bir şekilde yönetilmektedir.

## 🔐 Güvenlik ve Kimlik Doğrulama (JWT)
Sistemde güvenlik, JWT (JSON Web Token) tabanlı bir yapı üzerine kuruludur. Kullanıcılar giriş yaptıklarında kendilerine özel bir token tanımlanır ve bu token üzerinden yetkilendirme yapılır.
* **Stateless Yapı:** Sunucu tarafında oturum tutulmaz, tüm yetkilendirme token üzerinden döner.
* **Role-Based Access Control (RBAC):** Kullanıcılar `USER` ve `ADMIN` rolleriyle birbirinden ayrılır.

## 🛡️ Yetkilendirme Kuralları
Sistemdeki veri bütünlüğünü korumak adına hassas işlemler sıkı yetkilendirme kurallarına bağlanmıştır:
* **Admin Yetkileri:** Ürün Silme, Ekleme ve Kullanıcı Yönetimi işlemleri tamamen ADMIN rolüne aittir.
* **Kısıtlamalar:** USER rolüne sahip standart bir kullanıcı, sistemdeki ürünleri veya diğer kullanıcıları asla silemez. Sadece vitrini gezebilir, sepete ürün ekleyebilir ve sipariş sürecini yönetebilir.

## 🧪 Test ve Kalite Güvencesi (QA)
Sistemin kararlılığını sağlamak için çeşitli test senaryoları entegre edilmiştir:
* **Cypress (E2E):** Kullanıcıların giriş yapma, ürünleri sepete ekleme ve sepetten çıkarma gibi kritik UI/UX senaryoları gerçek tarayıcı ortamında otomatize edilmiştir.
* **JUnit (Unit Tests):** Backend tarafındaki iş mantığı (Service/Entity) ve kullanıcı rol/yetki atamaları izole edilmiş birim testleriyle doğrulanmıştır.

## 📸 Proje Ekran Görüntüleri

### Admin Dashboard (Restricted Access)
<img width="1894" height="891" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/18cb9bec-6673-4d73-b4ec-c0208e0bc03d" />

### Shopping Experience
<img width="1894" height="880" alt="Shopping Experience" src="https://github.com/user-attachments/assets/a99fbb69-3bdc-44b0-b588-341d48a768b7" />

### Home Page
<img width="1894" height="884" alt="Home Page" src="https://github.com/user-attachments/assets/676bf78a-396b-43d2-b8ee-f7e874d7d035" />

## ⚙️ Kurulum ve Çalıştırma

### Gereksinimler
* Java 17+
* Node.js & npm
* PostgreSQL

### 1. Projeyi Klonlayın
```bash
git clone [https://github.com/Emirhangn/technovo-ecommerce.git](https://github.com/Emirhangn/technovo-ecommerce.git)
