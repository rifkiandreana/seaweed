FROM python:3.11-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    && apt-get clean

# Copy project files
WORKDIR /app
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port and run app
EXPOSE 5000
CMD ["gunicorn", "main:app", "--bind", "0.0.0.0:5000"]
