$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

    // Bootstrap 5.1 sets aria-hidden on the modal while it still has focus.
    // Blur it first so Chrome does not block the attribute.
    $('#myAwesomeLightbox').on('hide.bs.modal', function () {
        if (this.contains(document.activeElement)) {
            document.activeElement.blur();
        }
    });
});
