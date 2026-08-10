# 🧊 SLUSHE Bot

![SLUSHE](https://img.shields.io/badge/SLUSHE-Discord%20Bot-00BFFF?style=for-the-badge&logo=discord)
![Python](https://img.shields.io/badge/Python-3.12%2B-3776AB?style=for-the-badge&logo=python)
![discord.py](https://img.shields.io/badge/discord.py-2.0%2B-7289DA?style=for-the-badge)
![License](https://img.shields.io/badge/License-Apache%202.0-green?style=for-the-badge)

> **A powerful, modern Discord bot with advanced community moderation, fun commands, and utility features. Powered by discord.py 2.0+ with multi-database support.**

---

## ✨ Features

### 🛡️ Community Moderation
- **Advanced Moderation Tools**: Ban, kick, mute, warn system with detailed logging
- **Auto-Moderation**: Spam detection, filter profanity, raid protection
- **Moderation Logs**: Complete audit trail stored in PostgreSQL/MongoDB
- **Role Management**: Automated role assignment and management
- **Permission Control**: Fine-grained permission handling

### 🎉 Fun Commands
- **Mini Games**: Dice rolls, 8-ball, rock-paper-scissors
- **Memes & Jokes**: Random meme generator, joke API integration
- **User Profiles**: Fun stats, achievement system
- **Reactions**: Interactive commands with emoji responses
- **Leaderboards**: Global and server-specific fun stats

### 🔧 Utility Features
- **Server Info**: Detailed server statistics and information
- **User Info**: Profile lookup, member statistics
- **Help System**: Interactive help commands with slash commands
- **Ping & Status**: Bot health monitoring
- **Configuration**: Per-server custom settings
- **Logging**: Comprehensive activity logging

---

## 🏗️ Architecture

### Technology Stack
- **Language**: Python 3.12+
- **Framework**: discord.py 2.0+
- **Databases**: 
  - SQLite (local development)
  - PostgreSQL (production user data)
  - MongoDB (moderation logs & caching)
  - MySQL (additional data storage)
- **Async**: Full asyncio support
- **Deployment**: Docker & Docker Compose

### Project Structure
```
SLUSHE-Bot/
├── src/
│   ├── bot.py                 # Main bot entry point
│   ├── config.py              # Configuration management
│   ├── database/              # Database handlers
│   │   ├── __init__.py
│   │   ├── sqlite.py          # SQLite connections
│   │   ├── postgres.py        # PostgreSQL connections
│   │   ├── mongodb.py         # MongoDB connections
│   │   └── mysql.py           # MySQL connections
│   ├── cogs/                  # Command modules
│   │   ├── moderation.py      # Moderation commands
│   │   ├── fun.py             # Fun commands
│   │   ├── utility.py         # Utility commands
│   │   └── events.py          # Event handlers
│   ├── utils/                 # Helper functions
│   │   ├── logger.py          # Logging setup
│   │   ├── validators.py      # Input validation
│   │   └── helpers.py         # Utility functions
│   └── models/                # Database models
│       ├── user.py
│       ├── moderation.py
│       └── server.py
├── .env.example               # Environment variables template
├── docker-compose.yml         # Docker Compose configuration
├── Dockerfile                 # Docker image definition
├── requirements.txt           # Python dependencies
├── LICENSE                    # Apache 2.0 License
└── README.md                  # This file
```

---

## 📋 Requirements

### System Requirements
- **Python**: 3.12 or higher
- **Operating System**: Linux, macOS, or Windows
- **Memory**: Minimum 512MB (1GB recommended)
- **Storage**: Minimum 500MB for databases

### Database Requirements
- **SQLite**: No setup required (built-in)
- **PostgreSQL**: 12+ recommended
- **MongoDB**: 4.4+ recommended
- **MySQL**: 8.0+ recommended

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have the following installed:
- Python 3.12+ ([Download](https://www.python.org/downloads/))
- Git ([Download](https://git-scm.com/))
- Docker & Docker Compose (optional, for containerized setup)

### 2. Clone Repository
```bash
git clone https://github.com/SLUSHEo/SLUSHE-Bot.git
cd SLUSHE-Bot
```

### 3. Create Virtual Environment
```bash
# Linux/macOS
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

### 4. Install Dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 5. Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` with your settings:
```env
# Discord Bot
DISCORD_TOKEN=your_bot_token_here
DISCORD_PREFIX=/
DISCORD_INTENTS=all

# SQLite
SQLITE_DB_PATH=./data/bot.db

# PostgreSQL
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=slushe
POSTGRES_PASSWORD=your_password
POSTGRES_DB=slushe_bot

# MongoDB
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=slushe_bot

# MySQL
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=slushe
MYSQL_PASSWORD=your_password
MYSQL_DB=slushe_bot

# Bot Settings
LOG_LEVEL=INFO
DEBUG_MODE=False
```

### 6. Setup Databases

#### Option A: Local Development (SQLite only)
```bash
python src/bot.py
# Databases will be created automatically
```

#### Option B: Docker Compose (All Databases)
```bash
docker-compose up -d
```

This will start:
- PostgreSQL container
- MongoDB container
- MySQL container
- SLUSHE Bot container

#### Option C: Manual Database Setup

**PostgreSQL:**
```bash
# Create database
createdb slushe_bot

# Run migrations (if available)
psql slushe_bot < migrations/postgres.sql
```

**MongoDB:**
```bash
# Start MongoDB service
mongod

# Connect and create database
mongo
# Use slushe_bot automatically on first connection
```

**MySQL:**
```bash
# Create database
mysql -u root -p -e "CREATE DATABASE slushe_bot;"

# Import schema
mysql -u root -p slushe_bot < migrations/mysql.sql
```

### 7. Run the Bot
```bash
# Development
python src/bot.py

# With logging
python src/bot.py --log-level DEBUG
```

---

## 📖 Command Examples

### Moderation Commands
```
/ban <user> [reason]           # Ban a user
/kick <user> [reason]          # Kick a user
/mute <user> <duration>        # Mute a user
/warn <user> <reason>          # Warn a user
/modlog <user>                 # View moderation log
/slowmode <seconds>            # Enable slowmode
```

### Fun Commands
```
/dice                           # Roll a dice
/8ball <question>              # Ask the magic 8-ball
/rps <choice>                  # Rock-paper-scissors
/joke                          # Get a random joke
/meme                          # Get a random meme
/stats                         # View your fun stats
```

### Utility Commands
```
/ping                          # Check bot latency
/serverinfo                    # Get server information
/userinfo <user>               # Get user information
/help [command]                # Show help menu
/avatar <user>                 # Get user avatar
/invite                        # Get bot invite link
```

---

## 🐳 Docker Deployment

### Using Docker Compose

1. **Copy docker-compose template** (if not exists):
```bash
cp docker-compose.yml.example docker-compose.yml
```

2. **Update `.env` with your credentials**

3. **Start all services**:
```bash
docker-compose up -d
```

4. **View logs**:
```bash
docker-compose logs -f bot
```

5. **Stop services**:
```bash
docker-compose down
```

### Manual Docker Build

```bash
# Build image
docker build -t slushe-bot:latest .

# Run container
docker run -d \
  --name slushe-bot \
  --env-file .env \
  -v $(pwd)/data:/app/data \
  slushe-bot:latest
```

---

## 🔌 Database Connection Details

### Connection Priorities
The bot attempts to connect to databases in this order:
1. SQLite (always available, fallback)
2. PostgreSQL (primary for user data)
3. MongoDB (logs and caching)
4. MySQL (additional storage)

### Database Purpose
| Database | Purpose | Required | Auto-Create |
|----------|---------|----------|-------------|
| SQLite | Local dev, fallback | ✅ | ✅ |
| PostgreSQL | User profiles, settings | ❌ | ✅ |
| MongoDB | Moderation logs, cache | ❌ | ✅ |
| MySQL | Member stats, leaderboards | ❌ | ✅ |

---

## ⚙️ Configuration

### Environment Variables Explained

**Discord Settings**
- `DISCORD_TOKEN`: Your bot token from [Discord Developer Portal](https://discord.com/developers/applications)
- `DISCORD_PREFIX`: Command prefix (default: `/` for slash commands)
- `DISCORD_INTENTS`: Bot intents (default: `all`)

**Database Settings**
- Each database has its own credentials in `.env`
- SQLite uses local file path (no auth required)
- Other databases require host, port, user, password

**Bot Settings**
- `LOG_LEVEL`: DEBUG, INFO, WARNING, ERROR
- `DEBUG_MODE`: Enable/disable debug features

---

## 📦 Dependencies

See `requirements.txt` for complete list:

```
discord.py==2.3.2+
python-dotenv==1.0.0
aiosqlite==0.19.0
asyncpg==0.28.0
motor==3.3.0
pymongo==4.5.0
aiomysql==0.2.0
aiohttp==3.9.0
```

---

## 🛠️ Development

### Running Tests
```bash
pytest tests/
```

### Code Style
```bash
# Format code
black src/

# Lint
flake8 src/

# Type checking
mypy src/
```

### Creating New Cogs

1. Create new file in `src/cogs/`:
```python
from discord.ext import commands

class MyCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command()
    async def mycommand(self, ctx):
        await ctx.send("Hello!")

async def setup(bot):
    await bot.add_cog(MyCog(bot))
```

2. Load in `src/bot.py`:
```python
await bot.load_extension("cogs.mycog")
```

---

## 📝 Logging

Bot logs are saved to:
- **Console**: Real-time output
- **File**: `logs/bot.log` (daily rotation)
- **Database**: Moderation actions in MongoDB/PostgreSQL

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines
- Follow PEP 8 style guide
- Add docstrings to functions
- Test your changes locally
- Update documentation as needed

---

## 🐛 Troubleshooting

### Bot doesn't start
- ✅ Verify `DISCORD_TOKEN` is correct
- ✅ Check Python version (must be 3.12+)
- ✅ Ensure all dependencies are installed: `pip install -r requirements.txt`

### Database connection issues
- ✅ Verify all connection strings in `.env`
- ✅ Check if database services are running
- ✅ For Docker: `docker-compose logs postgres` (or mongodb, mysql)

### Commands not working
- ✅ Ensure bot has required permissions in server
- ✅ Check if intents are properly configured
- ✅ Verify bot is online and responsive (`/ping`)

### Permission denied errors
- ✅ Add bot to server with correct permissions
- ✅ Bot role must be higher than target user/role
- ✅ Check server role hierarchy settings

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

---

## 🔒 Privacy & Terms

- **Privacy Policy**: See [PRIVACY.md](PRIVACY.md)
- **Terms of Service**: See [TERMS.md](TERMS.md)

---

## 📞 Support & Contact

- 🐛 **Report bugs**: [GitHub Issues](https://github.com/SLUSHEo/SLUSHE-Bot/issues)
- 💬 **Discord**: [@SLUSHE](https://discord.com)
- 🌐 **Website**: https://slushe.com

---

## 🎯 Roadmap

- [ ] Web Dashboard for server management
- [ ] Advanced analytics & statistics
- [ ] Custom command builder
- [ ] Webhook integrations
- [ ] Music playback integration
- [ ] Multi-language support

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub and consider supporting development!

---

**Made with ❄️ by [SLUSHEo](https://github.com/SLUSHEo)**