## API EndPoint

http://www.api.com/filteredimage?image_url={{URL}}

Replace `{{URL}}` with the URL of the image you want to filter.

### Authentication

This API requires Basic Authentication.

## Response

The API will return the filtered image in the response.

## Errors

- **401 Unauthorized:** If authentication fails.
- **400 Bad Request:** If the provided image URL is invalid or not accessible.

## Example

```bash
GET http://example.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpgs
```
