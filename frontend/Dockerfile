# --- Stage 1: Build the Next.js application ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# --- Stage 2: Run Next.js app in production ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE ${PORT}

CMD ["npm", "run", "start"]
