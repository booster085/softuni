(function($) {
    var tags = {
        typeField : null,
        tagToAdd : null,
        items : [],
        mainMenu : null,
        init : function(selectMenu) {
            selectMenu.addClass('tags');
            tags.mainMenu = selectMenu.parent();
            tags.keyup(tags.mainMenu, function(e) {
                e.preventDefault()
                tags.typeField = tags.mainMenu.find('input.search');
                tags.tagToAdd = tags.typeField.val().trim();
                tags.items = tags.getItemsValues(tags.mainMenu);

                if ($.inArray(tags.tagToAdd.toLowerCase(), tags.items) < 0 && tags.tagToAdd.trim().length > 0) {
                    if (!tags.typeField.siblings('.plus').length) {
                        tags.typeField.before('<i class="plus icon" style="line-height: 30px; height: 30px; cursor: pointer;"></i>');
                    }
                } else {
                    tags.typeField.siblings('i.plus').remove();
                }
            }),
            tags.click(tags.mainMenu, 'i.plus', function(e) {
                e.preventDefault();
                tags.typeField.before('<a class="ui label transition visible custom" data-value="' + tags.tagToAdd.toLowerCase() + '" style="display: inline-block !important;">' + tags.tagToAdd + '<i class="delete icon"></i></a>');
                tags.mainMenu.find('.menu.transition').append('<div class="item filtered active" data-value="' + tags.tagToAdd.toLowerCase() + '">' + tags.tagToAdd + '</div>');
                tags.typeField.val('').siblings('i.plus').remove();
            }),
            tags.keydown(tags.mainMenu, tags.typeField, function(e) {
                if (e.which == 13) {
                    tags.mainMenu.find('i.plus').click();
                }
            }),
            tags.click(tags.mainMenu, 'a.custom > i.delete', function(e) {
                e.preventDefault();
                tags.mainMenu.find('.dropdown.multiple.tags').addClass('active visible');
                $(this).parent('a').remove();
            });
        },
        getItemsValues : function(obj) {
            var arr = [];
            obj.find('.menu > .item').each( function(k, v) {
                    arr.push($(v).text().toLowerCase());
                });
            return arr;
        },
        click : function(element, bind, handler, e) {
            $(element).on('click', bind, function (e) {
                handler.call(this, e);
            });
        },
        keyup : function(element, handler, e) {
            $(element).on('keyup', function (e) {
                handler.call(this, e);
            });
        },
        keydown : function(element, bind, handler, e) {
            $(element).on('keydown', bind, function (e) {
                handler.call(this, e);
            });
        },
    }
     $.fn.tags = function() {
         return tags.init(this);
    }
})(jQuery);