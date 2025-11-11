#!/bin/bash

# Tangkap Ctrl+C untuk hentikan semua
trap "echo 'Stopping all...'; kill 0; exit" SIGINT

# 1️⃣ Jalankan BE di background
echo "Starting BE..."
cd be || exit
pnpm install
pnpm start:dev &
BE_PID=$!

# 2️⃣ Tunggu BE siap - simple sleep
echo "Waiting for BE to be ready..."
sleep 10  # Tunggu 10 detik untuk BE startup

echo "BE is ready."

# 3️⃣ Jalankan FE
cd ../fe || exit
pnpm install
pnpm gen
pnpm dev

# Tunggu BE (opsional)
wait $BE_PID