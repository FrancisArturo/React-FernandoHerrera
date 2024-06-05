import { v2 as cloudinary} from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";


cloudinary.config( {
    cloud_name: "dpu7uqndt",
    api_key: "556677323439435",
    api_secret: "6zGKFtoF50yOj-aQHOHINxuFIkg",
    secure: true
})

describe('pruebas en fileUpload.js', () => {
    

    test('debe subir el archivo correctamente a cloudinary', async () => {
        
        const imageUrl = "https://thecamerastore.com/cdn/shop/articles/GINAYEOLANDSCAPE-1_800x.jpg?v=1687296669";
        const res = await fetch( imageUrl );
        const blob = await res.blob();
        const file = new File([blob], "fotoTest.jpg");

        const url = await fileUpload(file);

        expect(typeof url).toBe("string");

        const segments = url.split("/");
        const imageId = segments[segments.length - 1].replace(".jpg", "");

        await cloudinary.api.delete_resources(["journal/" + imageId]);
        
    });

    test('debe retornar null', async () => {
        
        
        const file = new File([], "fotoTest.jpg");

        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});