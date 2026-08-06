# How to Self-Host n8n on Docker VPS (Ultimate 2026 Guide)

> **SEO Title:** How to Self-Host n8n Workflow Automation on Docker VPS (2026 Setup Guide)  
> **Meta Description:** Learn how to deploy n8n self-hosted workflow automation on a Docker VPS with Nginx Reverse Proxy, Free SSL, PostgreSQL, and sub-100ms execution speeds. Save 90%+ on Zapier/Make fees.  
> **Target Keywords:** self-host n8n docker vps, n8n docker compose tutorial, n8n self hosted cost, n8n vs zapier self hosted, n8n nginx ssl setup, cheap nvme vps n8n  
> **Recommended Medium Tags:** `#Automation` `#DevOps` `#SelfHosted` `#n8n` `#WebDevelopment`  
> **Canonical URL:** `https://cloudhoste.eu/self-hosted-n8n-workflow-automation-europe-guide.html`  
> **Estimated Read Time:** 7 min read  

---

## Subtitle
*Ditch expensive per-execution API bills. Here is the step-by-step production blueprint to deploy a private, enterprise-grade n8n workflow engine on a €4/mo NVMe Cloud VPS with Docker, Nginx, PostgreSQL, and automatic SSL.*

---

## Table of Contents
1. [Why Self-Host n8n in 2026? (Zapier vs. n8n Self-Hosted)](#1-why-self-host-n8n-in-2026-zapier-vs-n8n-self-hosted)
2. [Prerequisites & System Hardware Requirements](#2-prerequisites--system-hardware-requirements)
3. [Step 1: Provisioning Your Cloud VPS & Domain DNS](#step-1-provisioning-your-cloud-vps--domain-dns)
4. [Step 2: Installing Docker & Docker Compose](#step-2-installing-docker--docker-compose)
5. [Step 3: Creating the Production Docker Compose Configuration](#step-3-creating-the-production-docker-compose-configuration)
6. [Step 4: Configuring Environment Variables & Secrets](#step-4-configuring-environment-variables--secrets)
7. [Step 5: Launching n8n & Securing with Let's Encrypt SSL](#step-5-launching-n8n--securing-with-lets-encrypt-ssl)
8. [Step 6: Production Security Hardening & Backup Strategy](#step-6-production-security-hardening--backup-strategy)
9. [Cost Breakdown & Benchmark Comparison](#cost-breakdown--benchmark-comparison)
10. [Final Thoughts & Next Steps](#final-thoughts--next-steps)

---

## 1. Why Self-Host n8n in 2026? (Zapier vs. n8n Self-Hosted)

SaaS workflow automation platforms like Zapier, Make (Integromat), and Workato have revolutionized business automation. However, their pricing model scales aggressively based on **task executions**. 

If your business processes **50,000 tasks per month**:
* **Zapier:** ~$300 to $499/month
* **Make.com:** ~$120/month
* **Self-Hosted n8n on Cloud VPS:** **€4.99/month (Flat Rate, Unlimited Executions)**

```
┌─────────────────────────────────────────────────────────┐
│               MONTHLY COST COMPARISON                   │
├─────────────────┬───────────────────┬───────────────────┤
│ Tasks / Month   │ Zapier Pro Plan   │ Self-Hosted n8n   │
├─────────────────┼───────────────────┼───────────────────┤
│ 10,000 tasks    │ $89 / mo          │ €4.99 / mo        │
│ 50,000 tasks    │ $389 / mo         │ €4.99 / mo        │
│ 500,000 tasks   │ $1,599+ / mo      │ €9.99 / mo        │
└─────────────────┴───────────────────┴───────────────────┘
```

Beyond massive cost savings, **n8n self-hosting** offers two key architectural advantages:
1. **100% Data Sovereignty & GDPR Compliance:** Sensitive customer payloads (CRMs, webhooks, databases) never leave your private European VPS server.
2. **Native AI Agent Integration:** n8n natively supports LangChain nodes, OpenAI GPT-4o, Anthropic Claude, and local LLM endpoints (via Ollama or vLLM running on your cloud infrastructure).

---

## 2. Prerequisites & System Hardware Requirements

To follow this production guide, you will need:

* **Cloud VPS Server:** Linux (Ubuntu 22.04 or 24.04 LTS recommended). 
* **Hardware Specs:**
  * *Minimum (Light Workflows):* 1 vCPU, 2 GB RAM, 25 GB NVMe SSD storage.
  * *Recommended (Heavy AI Workflows & Webhooks):* 2 vCPU, 4 GB RAM, 50 GB NVMe SSD (e.g., [CloudHoste Enterprise NVMe VPS](https://cloudhoste.eu/vps-hosting.html)).
* **Domain Name:** A registered domain or subdomain pointing to your server's IP address (e.g., `automation.yourdomain.com`).
* **Basic Command Line Access:** SSH client (Terminal, PuTTY, or PowerShell).

> 💡 **Pro Tip:** Always choose NVMe SSD storage over standard SATA SSDs. n8n writes execution logs and JSON webhooks rapidly to SQLite or PostgreSQL; NVMe disk I/O prevents pipeline bottlenecks under heavy traffic spikes.

---

## 3. Step 1: Provisioning Your Cloud VPS & Domain DNS

1. Connect to your VPS server via SSH:
   ```bash
   ssh root@YOUR_SERVER_IP
   ```

2. Update your package lists and system packages:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Configure DNS Records:**
   Navigate to your DNS manager (Cloudflare or CloudHoste DNS) and create an `A` Record:
   * **Host:** `n8n` (or `automation`)
   * **Points to:** `YOUR_SERVER_IP`
   * **TTL:** Auto (or 300 seconds)

Verify DNS propagation before continuing:
```bash
ping n8n.yourdomain.com
```

---

## 4. Step 2: Installing Docker & Docker Compose

We use the official Docker repository for Ubuntu to ensure stability and security updates.

```bash
# 1. Install prerequisites
sudo apt install -y curl apt-transport-https ca-certificates software-properties-common gnupg lsb-release

# 2. Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 3. Set up the stable Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 4. Install Docker Engine and Docker Compose Plugin
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 5. Verify installation
docker --version
docker compose version
```

---

## 5. Step 3: Creating the Production Docker Compose Configuration

Create a isolated workspace directory for n8n:

```bash
mkdir -p /opt/n8n-docker && cd /opt/n8n-docker
```

Now, create the `docker-compose.yml` file using `nano docker-compose.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: n8n_postgres
    restart: always
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
    volumes:
      - postgres_storage:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"]
      interval: 10s
      timeout: 5s
      retries: 5

  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n_app
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    environment:
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=UTC
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=${POSTGRES_DB}
      - DB_POSTGRESDB_USER=${POSTGRES_USER}
      - DB_POSTGRESDB_PASSWORD=${POSTGRES_PASSWORD}
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=168
    links:
      - postgres
    depends_on:
      postgres:
        condition: service_healthy
    volumes:
      - n8n_storage:/home/node/.n8n

volumes:
  postgres_storage:
  n8n_storage:
```

---

## 6. Step 4: Configuring Environment Variables & Secrets

Create the `.env` configuration file in `/opt/n8n-docker/.env`:

```env
# Domain Configuration
DOMAIN_NAME=yourdomain.com
SUBDOMAIN=automation

# PostgreSQL Database Secrets
POSTGRES_USER=n8n_db_user
POSTGRES_PASSWORD=SUPER_SECRET_STRONG_PASSWORD_2026
POSTGRES_DB=n8n_production
```

> 🔐 **Security Reminder:** Replace `SUPER_SECRET_STRONG_PASSWORD_2026` with a randomly generated 32-character string (`openssl rand -base64 24`).

---

## 7. Step 5: Launching n8n & Securing with Let's Encrypt SSL

### 1. Install Nginx and Certbot

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

### 2. Configure Nginx Reverse Proxy

Create `/etc/nginx/sites-available/n8n.conf`:

```nginx
server {
    server_name automation.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSockets support for real-time workflow editing
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # Disable buffering for streaming AI LLM responses
        proxy_buffering off;
        proxy_cache off;
    }
}
```

Enable the Nginx virtual host and test setup:
```bash
sudo ln -s /etc/nginx/sites-available/n8n.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Obtain Free Let's Encrypt SSL Certificate

```bash
sudo certbot --nginx -d automation.yourdomain.com --non-interactive --agree-tos -m admin@yourdomain.com
```

### 4. Start Docker Containers

```bash
cd /opt/n8n-docker
docker compose up -d
```

Check running container logs to confirm successful startup:
```bash
docker compose logs -f n8n
```

Navigate to `https://automation.yourdomain.com` in your browser. You will be greeted by the initial n8n owner setup screen!

---

## 8. Step 6: Production Security Hardening & Backup Strategy

### A. Automatic Data Pruning
By default, n8n records every node execution, which can grow your database quickly. In our `.env` configuration, we enabled automatic execution pruning:
* `EXECUTIONS_DATA_PRUNE=true`
* `EXECUTIONS_DATA_MAX_AGE=168` *(Prunes logs older than 7 days / 168 hours)*

### B. Automated Daily Backup Script
Create `/usr/local/bin/n8n-backup.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/n8n"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

mkdir -p $BACKUP_DIR
docker exec -t n8n_postgres pg_dump -U n8n_db_user n8n_production > $BACKUP_DIR/n8n_db_$TIMESTAMP.sql
tar -czf $BACKUP_DIR/n8n_storage_$TIMESTAMP.tar.gz /opt/n8n-docker

# Delete backups older than 14 days
find $BACKUP_DIR -type f -mtime +14 -delete
```

Make executable and add to crontab:
```bash
chmod +x /usr/local/bin/n8n-backup.sh
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/n8n-backup.sh") | crontab -
```

---

## 9. Cost Breakdown & Benchmark Comparison

| Hosting Solution | Monthly Cost | Execution Limit | Data Privacy | AI LLM Support |
| :--- | :--- | :--- | :--- | :--- |
| **Zapier Professional** | ~$89.00 / mo | 10,000 tasks | Shared / US Cloud | Basic |
| **Make.com Pro** | ~$29.00 / mo | 10,000 operations | Shared Cloud | Moderate |
| **CloudHoste NVMe VPS (Self-Hosted n8n)** | **€4.99 / mo** | **Unlimited** | **100% Private (EU/GDPR)** | **Full (LangChain, Ollama)** |

---

## 10. Final Thoughts & Next Steps

Self-hosting n8n is the ultimate game-changer for digital agencies, AI developers, and scaling startups. You eliminate recurring SaaS platform tax while keeping sensitive customer data completely private.

Ready to launch your high-performance n8n automation engine?

👉 **[Deploy High-Speed NVMe Cloud VPS on CloudHoste EU starting at €2.99/mo](https://cloudhoste.eu/n8n-hosting.html)** — Pre-configured for Docker, low-latency European connectivity, and 99.9% guaranteed uptime.

---

### Author Bio & Canonical References
*Written by the CloudHoste Infrastructure Team. Published natively on [CloudHoste Blog](https://cloudhoste.eu/self-hosted-n8n-workflow-automation-europe-guide.html) and syndicated for developer communities on Medium.*
