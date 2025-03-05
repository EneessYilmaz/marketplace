# Temel imaj olarak Node.js kullan
FROM node:18

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve pnpm-lock.yaml dosyalarını kopyala
COPY package.json pnpm-lock.yaml ./

# pnpm'i global olarak yükle
RUN npm install -g pnpm

# Bağımlılıkları yükle
RUN pnpm install

# Uygulama dosyalarını kopyala
# Sadece src klasöründeki dosyaları kopyala
COPY src . 

# TypeScript dosyalarını derlemek için 'pnpm build' komutunu çalıştır
RUN pnpm build

# Uygulamayı başlatmak için gerekli komutu tanımla
CMD ["node", "dist/main.js"]  # 'dist' dizinini kontrol edin
