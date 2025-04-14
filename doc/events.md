
## Get All Events

**Endpoint** : `GET /api/events`

**Query Params** (optional):
- `page`: number (default: 1)
- `limit`: number (default: 10)
- `search`: string (search by event title)

**Response Body (Success)**:

```json
{
  "data": [
    {
      "id": "evt_123",
      "title": "Music Festival 2025",
      "date": "2025-07-10",
      "location": "Jakarta Convention Center",
      "price": 250000
    },
    {
      "id": "evt_124",
      "title": "Tech Conference 2025",
      "date": "2025-08-15",
      "location": "Bandung Tech Park",
      "price": 100000
    }
  ]
}
```

---

## Get Event Detail

**Endpoint** : `GET /api/events/:id`

**Response Body (Success)**:

```json
{
  "data": {
    "id": "evt_123",
    "title": "Music Festival 2025",
    "description": "An amazing music experience.",
    "date": "2025-07-10",
    "location": "Jakarta Convention Center",
    "price": 250000,
    "available_tickets": 150
  }
}
```

**Response Body (Failed)**:

```json
{
  "errors": "Event not found"
}
```

---

## Book Ticket

**Endpoint** : `POST /api/tickets`

**Headers**:
- `Authorization: Bearer <token>`

**Request Body**:

```json
{
  "event_id": "evt_123",
  "quantity": 2
}
```

**Response Body (Success)**:

```json
{
  "data": {
    "ticket_id": "tkt_987",
    "event": {
      "id": "evt_123",
      "title": "Music Festival 2025",
      "date": "2025-07-10"
    },
    "quantity": 2,
    "total_price": 500000,
    "status": "booked"
  }
}
```

**Response Body (Failed)**:

```json
{
  "errors": "Insufficient tickets available"
}
```

---

## Get My Tickets

**Endpoint** : `GET /api/tickets`

**Headers**:
- `Authorization: Bearer <token>`

**Response Body (Success)**:

```json
{
  "data": [
    {
      "ticket_id": "tkt_987",
      "event_title": "Music Festival 2025",
      "date": "2025-07-10",
      "quantity": 2,
      "status": "booked"
    },
    {
      "ticket_id": "tkt_988",
      "event_title": "Tech Conference 2025",
      "date": "2025-08-15",
      "quantity": 1,
      "status": "booked"
    }
  ]
}
```

---

## Get Ticket Detail

**Endpoint** : `GET /api/tickets/:id`

**Headers**:
- `Authorization: Bearer <token>`

**Response Body (Success)**:

```json
{
  "data": {
    "ticket_id": "tkt_987",
    "event": {
      "id": "evt_123",
      "title": "Music Festival 2025",
      "date": "2025-07-10",
      "location": "Jakarta Convention Center"
    },
    "quantity": 2,
    "total_price": 500000,
    "status": "booked",
    "booked_at": "2025-04-13T10:30:00Z"
  }
}
```

---
