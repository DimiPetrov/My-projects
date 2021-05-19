/**
 * @author Dimitar Petrov
 */
/**
 * This function shows how the page looks like when
 * clicking on "Upload new Gif".
 */
export const uploadGifView = () => `
<h5> <div class = 'uploadGifContainer'> 
 Upload a Gif 
<div class='innerUploadGifContainer'>
    <form>
        <p>
            <label for="tags">Gif tags: </label>
            <input type ="text" id="tags" name="tags"/>
        </p>
        <p>
            <label class="fileUpload" for="file">Add a new Gif for Upload
            <input type ="file" id="file" name="file"/>
        </label>
        </p>
        <p>
            <button id='uploadBtn' onClick='showMessage()'>Upload</button>
        </p>
    </form>
    </div>
    </div> </h5>
    `; 