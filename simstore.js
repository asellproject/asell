const $license_item = 'simstore-blogger-template'
license()
function license() {
  function _0x4df0fa(_0x5ff63) {
    function _0x27e5a(_0x4a16bc) {
      try {
        return btoa(atob(_0x4a16bc)) == _0x4a16bc
      } catch (_0x2fdf2d) {
        return false
      }
    }
    if (_0x27e5a(_0x5ff63)) {
      _0x5ff63 = atob(_0x5ff63)
      _0x5ff63 = _0x5ff63.replaceAll('XXX', '.')
      _0x5ff63 = _0x5ff63.replaceAll('YY', '-')
      _0x5ff63 = _0x5ff63.replaceAll('O5', 'a')
      _0x5ff63 = _0x5ff63.replaceAll('E4', 'i')
      _0x5ff63 = _0x5ff63.replaceAll('U3', 'u')
      _0x5ff63 = _0x5ff63.replaceAll('I2', 'e')
      _0x5ff63 = _0x5ff63.replaceAll('A1', 'o')
      function _0x117c98(_0x4b21f9) {
        const _0x2e8c92 = _0x4b21f9.split(''),
          _0x28985e = _0x2e8c92.reverse(),
          _0x9396a0 = _0x28985e.join('')
        return _0x9396a0
      }
      return (_0x5ff63 = _0x117c98(_0x5ff63)), _0x5ff63
    } else {
      return ''
    }
  }
  function _0x40b420(_0x36676e) {
    var _0x40c8c8 =
      '            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">            <style>hr { margin:0!important; } body { padding: 0px!important; } * { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; }</style>            <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;">                <div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;">                    <svg style="fill:#636363;width:100px;height:100px;display:block;margin:0 auto 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg>                    <h2><b>Peringatan</b> :</h2>                    <br>                    <p>' +
      _0x36676e +
      '</p>                    <br>                    <hr style="border:0;border-top:1px solid #ddd;">                    <br>                    <a href="https://lapak.kangrian.net/' +
      $license_item +
      '" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:1px;">https://lapak.kangrian.net</a>                </div>            </div>        '
    return (document.body.innerHTML = _0x40c8c8)
  }
  if (typeof $license_key === 'undefined') {
    _0x40b420('Dilarang menghapus variable <b>$license_key</b>..')
  } else {
    if (typeof $license_item === 'undefined') {
      _0x40b420('Dilarang menghapus variable <b>$license_item</b>..')
    } else {
      if (
        location.hostname.indexOf('localhost') != -1 ||
        location.hostname.indexOf('.blogspot.com') != -1 ||
        location.hostname.indexOf('.blogger.com') != -1
      ) {
        console.log(
          'Developed by. https://kangrian.net ( Free / Trial Version )'
        )
        var _0x4fe0b7 = document.getElementById('copyright')
        if (_0x4fe0b7 === null) {
          _0x40b420(
            '<b>Hargailah Hak Cipta</b><br><br><small>Gunakan "Lisensi Premium" untuk menghapus credit.</small><br><br><small>#ERR_COPYRIGHT</small>'
          )
        } else {
          var _0x40e022 = new Date().getFullYear()
          _0x4fe0b7.innerHTML =
            '&#0169;' +
            _0x40e022 +
            ' &#8212; Made with. <a href="https://lapak.kangrian.net/' +
            $license_item +
            '" target="_blank"><b>Kr</b></a>'
          _0x4fe0b7.setAttribute(
            'style',
            'display:inline-block!important;opacity:1!important;position:static!important;visibility:visible!important;text-indent:0px!important;color:currentColor!important'
          )
        }
      } else {
        if ($license_key === '') {
          _0x40b420(
            '<b>Kode Lisensi</b> dibutuhkan..<br><br><small>#ERR_LICENSE</small>'
          )
        } else {
          const _0x4049af = _0x4df0fa($license_key).split('|')[0],
            _0x1d1026 = _0x4df0fa($license_key).split('|')[1]
          if (_0x4049af == '' || _0x4049af == undefined) {
            _0x40b420(
              '<b>Kode Lisensi</b> yang digunakan tidak valid.</b><br><br><small>#ERR_KEY</small>'
            )
          } else {
            if (location.hostname.indexOf(_0x4049af) == -1) {
              _0x40b420(
                '<b>Kode Lisensi</b> hanya bisa digunakan pada website dengan domain : <b>' +
                  _0x4049af +
                  '</b><br><br><small>#ERR_DOMAIN</small>'
              )
            } else {
              if (_0x1d1026 != $license_item) {
                function _0x2a8f6e(_0x36301a) {
                  _0x36301a = _0x36301a.split(' ')
                  for (
                    var _0x1e073a = 0;
                    _0x1e073a < _0x36301a.length;
                    _0x1e073a++
                  ) {
                    _0x36301a[_0x1e073a] =
                      _0x36301a[_0x1e073a].charAt(0).toUpperCase() +
                      _0x36301a[_0x1e073a].slice(1)
                  }
                  return (_0x36301a = _0x36301a.join(' ')), _0x36301a
                }
                _0x40b420(
                  '<b>Kode Lisensi</b> hanya bisa digunakan untuk <b>' +
                    _0x2a8f6e($license_item.replaceAll('-', ' ')) +
                    '</b><br><br><small>#ERR_ITEM</small>'
                )
              } else {
                console.log(
                  'Developed by. https://kangrian.net ( Premium Version )'
                )
              }
            }
          }
        }
      }
    }
  }
}
window.onload = function () {
  etc()
  shortcode()
  post_convert()
  post_sort()
  pop()
  popwin()
  lazyload()
  timeago()
  lightbox()
  slideshow()
  darkmode()
  update_js()
  custom_js()
}
function update_js() {
  if ($('table .cta_link').length) {
    var _0x40d179 = $('table .cta_link').html().split('<br>')
    if (_0x40d179.length && _0x40d179[0] != '') {
      for (i in _0x40d179) {
        var _0x4ff5ee = _0x40d179[i].split(',')[0],
          _0x64f017 = _0x40d179[i].split(',')[1],
          _0x137068 = '//' + _0x64f017.split('/')[2]
        _0x137068 = _0x137068
          .replace('//www.', '')
          .replace('//m.', '')
          .replace('//api.', '')
          .replace('//web.', '')
          .replace('//', '')
        var _0x2fa668 =
          '<a class="btn" href="' +
          _0x64f017 +
          '" target="_popwin"><img src="https://www.google.com/s2/favicons?domain=' +
          _0x137068 +
          '&sz=32" style="float:right;"/>' +
          _0x4ff5ee +
          '</a>'
        $(_0x2fa668).appendTo('#pop-cta-link .grid-cta')
      }
      $('.article-right .cta .link').html($('table .cta_link_order').html())
      $('.article-right .cta .link').removeAttr('href')
      $('.article-right .cta .link').attr('target', 'pop-cta-link')
    }
  }
}
function slideshow() {
  $('.slideshow').each(function () {
    var _0x5b9f94 = $(this),
      _0x19c01d = 4000,
      _0x2182b2 = parseInt(_0x5b9f94.attr('data-delay')),
      _0x4281c9 = 1000,
      _0x3c3765 = parseInt(_0x5b9f94.attr('data-fade')),
      _0x5335da
    _0x2182b2.length && (_0x19c01d = _0x2182b2)
    _0x3c3765.length && (_0x4281c9 = _0x3c3765)
    $('.slideshow-item, .widget', _0x5b9f94).length > 1 &&
      ((_0x5335da = setInterval(function () {
        $('.slideshow-item:visible, .widget:visible', _0x5b9f94).each(
          function () {
            var _0x5ba83d = $(this)
            _0x5ba83d.hide()
            _0x5ba83d.next('.slideshow-item, .widget').length
              ? _0x5ba83d.next('.slideshow-item, .widget').fadeIn(_0x4281c9)
              : _0x5ba83d
                  .closest('.slideshow')
                  .find('.slideshow-item, .widget')
                  .first()
                  .fadeIn(_0x4281c9)
          }
        )
      }, _0x19c01d)),
      $(this).append(
        '  <button class="nav-left">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   '
      ))
    $('.nav-left', _0x5b9f94).on('click', function () {
      clearInterval(_0x5335da)
      $('.slideshow-item:visible, .widget:visible', _0x5b9f94).each(
        function () {
          var _0x5a7522 = $(this)
          _0x5a7522.hide()
          _0x5a7522.prev('.slideshow-item, .widget').length
            ? _0x5a7522.prev('.slideshow-item, .widget').fadeIn(_0x4281c9)
            : _0x5a7522
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .last()
                .fadeIn(_0x4281c9)
        }
      )
    })
    $('.nav-right', _0x5b9f94).on('click', function () {
      clearInterval(_0x5335da)
      $('.slideshow-item:visible, .widget:visible', _0x5b9f94).each(
        function () {
          var _0x56f8c5 = $(this)
          _0x56f8c5.hide()
          _0x56f8c5.next('.slideshow-item, .widget').length
            ? _0x56f8c5.next('.slideshow-item, .widget').fadeIn(_0x4281c9)
            : _0x56f8c5
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .first()
                .fadeIn(_0x4281c9)
        }
      )
    })
  })
}
function darkmode() {
  localStorage.getItem('darkmode') == 1 && $('a[href="#darkmode"] i').toggle()
  $('a[href="#darkmode"]').on('click', function (_0x3925b9) {
    _0x3925b9.preventDefault()
    $('html').toggleClass('dark')
    $('i', this).toggle()
    localStorage.getItem('darkmode') == 1
      ? localStorage.setItem('darkmode', 0)
      : localStorage.setItem('darkmode', 1)
    darkmode_head()
  })
}
function post_sort() {
  $('#sort select').on('change', function () {
    $('#sort').addClass('loading')
    if ($(this).val() == 'terbaru') {
      var _0xe39a9f = $('.Blog article')
      _0xe39a9f.sort(function (_0xe6001c, _0x25931a) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', _0x25931a).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', _0xe6001c).attr('content')
          ).getTime()
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0xe39a9f)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terlama') {
      var _0xe39a9f = $('.Blog article')
      _0xe39a9f.sort(function (_0x1c41cc, _0x4df80a) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', _0x1c41cc).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', _0x4df80a).attr('content')
          ).getTime()
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0xe39a9f)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terendah') {
      var _0xe39a9f = $('.Blog article')
      _0xe39a9f.sort(function (_0x139b97, _0x3b774b) {
        return (
          $('.harga [data-harga]', _0x139b97).attr('data-harga') -
          $('.harga [data-harga]', _0x3b774b).attr('data-harga')
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0xe39a9f)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'tertinggi') {
      var _0xe39a9f = $('.Blog article')
      _0xe39a9f.sort(function (_0x46415a, _0x4d5931) {
        return (
          $('.harga [data-harga]', _0x4d5931).attr('data-harga') -
          $('.harga [data-harga]', _0x46415a).attr('data-harga')
        )
      })
      setTimeout(function () {
        $('.Blog .is_loop').append(_0xe39a9f)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
  })
  $('#sort select').val() != 'terbaru' && $('#sort select').trigger('change')
}
function post_convert() {
  $('article:not(.field_loaded)').each(function () {
    var _0x33e15f = $(this)
    _0x33e15f.addClass('field_loaded')
    _0x33e15f.hasClass('is_post') &&
      $('.field .gambar', this).length &&
      $('.field .gambar img', this).each(function (_0xbbe2cb) {
        if (_0xbbe2cb > 0) {
          var _0x46f471 = $(this).attr('src').split('=')[0],
            _0x26bde7 = _0x46f471.split('/')[7],
            _0x453f09 =
              _0x46f471.replace(_0x26bde7, 'w150-h150-c') + '=w150-h150-c',
            _0x4ae38d = _0x46f471.replace(_0x26bde7, 's1000') + '=s1000'
          $('figure.cover', _0x33e15f).append(
            '<a class="lightbox" href="' +
              _0x4ae38d +
              '"><img data-src="' +
              _0x453f09 +
              '"/></a>'
          )
        }
      })
    var _0x3b0bc2 = ''
    $('.field .status', _0x33e15f).length &&
      (_0x3b0bc2 = $('.field .status', _0x33e15f)
        .text()
        .replaceAll('  ', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var _0x1eb884 = ''
    $('.field .harga_normal', _0x33e15f).length &&
      (_0x1eb884 = $('.field .harga_normal', _0x33e15f)
        .text()
        .replaceAll(' ', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var _0x117b19 = ''
    $('.field .harga_diskon', _0x33e15f).length &&
      (_0x117b19 = $('.field .harga_diskon', _0x33e15f)
        .text()
        .replaceAll(' ', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var _0x5d43a8 = ''
    $('.field .cta_whatsapp', _0x33e15f).length &&
      (_0x5d43a8 = $('.field .cta_whatsapp', _0x33e15f)
        .text()
        .replaceAll(' ', '')
        .replaceAll('+', '')
        .replaceAll('-', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var _0x1469da = ''
    if (_0x1eb884) {
      _0x1469da += '<div class="harga"><span class="wrap">'
      if (!_0x33e15f.hasClass('is_post') && _0x3b0bc2 == 'off') {
        _0x1469da +=
          '                        <small class="off">' +
          $_config.cta.order_button_off +
          '</small><span data-harga="' +
          _0x1eb884 +
          '">' +
          format_price(
            _0x1eb884,
            $_config.local.country_id,
            $_config.local.currency
          ) +
          '</span>                    '
        $('[itemprop="price"]', this).attr('content', _0x1eb884)
      } else {
        if (_0x117b19) {
          var _0x145e51 = ''
          _0x117b19.includes('%')
            ? ((_0x145e51 = _0x117b19.replaceAll('%', '')),
              (_0x117b19 = Number(_0x1eb884 - (_0x1eb884 * _0x145e51) / 100)))
            : (_0x145e51 = Math.round(100 - (_0x117b19 / _0x1eb884) * 100))
          _0x1469da +=
            '                            <small class="persen">-' +
            _0x145e51 +
            '%</small><s>' +
            format_price(
              _0x1eb884,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</s> <b data-harga="' +
            _0x117b19 +
            '">' +
            format_price(
              _0x117b19,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</b>                        '
          $('[itemprop="price"]', this).attr('content', _0x117b19)
        } else {
          _0x1469da +=
            '                            <span data-harga="' +
            _0x1eb884 +
            '">' +
            format_price(
              _0x1eb884,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</span>                        '
          $('[itemprop="price"]', this).attr('content', _0x1eb884)
        }
      }
      _0x1469da += '</span></div>'
      _0x3b0bc2 == 'off' &&
        ($(this).addClass('off'),
        $(this)
          .closest('article')
          .find('[itemprop="availability"]')
          .attr('content', 'https://schema.org/OutOfStock'))
    }
    _0x33e15f.hasClass('is_post') &&
      (_0x3b0bc2 == 'off'
        ? (_0x1469da +=
            '<div class="cta"><a class="link off" href="#off">' +
            $_config.cta.order_button_off +
            '</a><a class="bagikan" target="pop-bagikan"><i class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg></i></a></div>')
        : (($admin = encodeURIComponent(
            $('[itemprop="author"] b', this).text()
          ).replaceAll('%0A', '')),
          (_0x39e5d3 = encodeURIComponent(
            $('h1.title', this).text()
          ).replaceAll('%0A', '')),
          (_0x1469da +=
            '<div class="cta"><a class="link" href="https://api.whatsapp.com/send?phone=' +
            (_0x5d43a8 ? _0x5d43a8 : $_config.cta.whatsapp) +
            '&text=' +
            $_config.cta.order_text
              .replaceAll('[admin]', $admin)
              .replaceAll('[title]', _0x39e5d3) +
            '%0A%0Avia. ' +
            $_config.url.canonical +
            '" target="_popwin"><i class="icon left"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg></i> ' +
            $_config.cta.order_button_text +
            '</a><a class="bagikan" target="pop-bagikan"><i class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg></i></a></div>')))
    var _0x39e5d3 = $('.title', this)
    $(_0x1469da).insertAfter(_0x39e5d3)
  })
}
function popwin() {
  $(document).on('click', '[target="_popwin"]', function (_0x52bf08) {
    _0x52bf08.stopPropagation()
    _0x52bf08.preventDefault()
    var _0x4e7b43 = $(this).attr('href'),
      _0xac7b5b = $(this).attr('data-popwin-width'),
      _0x4d946f = $(this).attr('data-popwin-height'),
      _0x54a56e = 960
    _0xac7b5b && (_0x54a56e = _0xac7b5b)
    var _0x127d6b = 540
    _0x4d946f && (_0x127d6b = _0x4d946f)
    var _0x380fcf = Number(screen.width / 2 - _0x54a56e / 2),
      _0x1ecdb0 = Number(screen.height / 2 - _0x127d6b / 2),
      _0x2822d3 = window.open(
        _0x4e7b43,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
          _0x54a56e +
          ', height=' +
          _0x127d6b +
          ', top=' +
          _0x1ecdb0 +
          ', left=' +
          _0x380fcf
      )
    _0x2822d3.focus()
  })
}
function shortcode() {
  $('.post-body').each(function () {
    $(this).html(
      $(this)
        .html()
        .replace(
          /\[youtube\]/g,
          '<div class="video"><iframe allowfullscreen="true" data-shortcode="youtube" data-src="'
        )
        .replace(/\[\/youtube\]/g, '"></iframe></div>')
        .replace(/\[code\]/g, '<pre data-shortcode="code"><code>')
        .replace(/\[\/code\]/g, '</code></pre>')
        .replace(
          /\[img\]/g,
          '<img style="display:block;width:100%;border-radius:10px;" data-shortcode="img" src="'
        )
        .replace(/\[\/img\]/g, '" alt="image"/>')
        .replace(/\[url\]/g, '<a data-shortcode="url" href="')
        .replace(
          /\[\/url\]/g,
          '" target="_blank" rel="nofollow external">Lihat Tautan</a>'
        )
    )
  })
  $('[data-shortcode]').each(function () {
    var _0x491b41 = $(this).attr('data-shortcode')
    if (_0x491b41 == 'img') {
      var _0x104a0c = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + _0x104a0c + '"></a>')
    }
    if (_0x491b41 == 'youtube') {
      var _0x5592d3 = $(this).attr('data-src'),
        _0x57be87 = _0x5592d3.split('/')[3]
      _0x5592d3.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x57be87 = get_url_parameter('v', _0x5592d3))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + _0x57be87 + '?rel=0'
      )
    }
  })
}
function etc() {
  $(window).on('beforeunload', function () {
    $('body').addClass('loading')
    setTimeout(function () {
      $('body').removeClass('loading')
    }, 2000)
  })
  $(window).on('scroll', function () {
    $(window).scrollTop() > 0
      ? $('#header').addClass('shadow')
      : $('#header').removeClass('shadow')
  })
  $('.LinkList li a[href*="#"]').each(function () {
    $(this).attr('href', 'javascript:void(0)')
    $(this).append(
      '<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>'
    )
    var _0x17da1b = $(this).parent('li')
    _0x17da1b.addClass('dropdown')
    _0x17da1b.wrapInner('<span class="dropdown-title"></span>')
    _0x17da1b.append('<ul class="sub"></ul>')
  })
  $('.LinkList li a:contains("_")').each(function () {
    var _0x3b7bd5 = $(this).parent('li').prev('.dropdown').find('ul')
    $(this).parent('li').appendTo(_0x3b7bd5)
    var _0x41a014 = $(this).text().replaceAll('_', '').replaceAll('_ ', '')
    $(this).text(_0x41a014)
  })
  $('.LinkList').on('click', 'li.dropdown', function () {
    $(this).find('ul:first').toggle()
    $(this).toggleClass('active')
  })
  $('[data-feed]').length &&
    $('[data-feed]').each(function () {
      var _0x1a34e1 = $(this),
        _0xbbdfd = $(this).attr('data-feed')
      _0x1a34e1.addClass('loading')
      _0x1a34e1.load(_0xbbdfd + ' .is_loop', function () {
        var _0x3e1a2a = $(this).html()
        _0x1a34e1.html(_0x3e1a2a)
        var _0x38d537 = _0x1a34e1.attr('data-hide-id')
        _0x38d537 &&
          (_0x1a34e1.find('article#' + _0x38d537).length
            ? _0x1a34e1.find('article#' + _0x38d537).remove()
            : _0x1a34e1.find('article:last-of-type').remove())
        post_convert()
        lazyload()
        timeago()
        _0x1a34e1.removeClass('loading')
      })
    })
  $('#pop-bagikan .copy button').on('click', function (_0x47ed75) {
    var _0x3d68cf = $(this)
    _0x3d68cf.siblings('input').select()
    document.execCommand('copy')
    _0x3d68cf.text('Disalin!')
    setTimeout(function () {
      _0x3d68cf.text('Salin')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var _0x44b5f6 = $('#header').outerHeight(),
        _0x7c6127 = $('.is_single article .attr-sticky').outerHeight()
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop:
              $(window.location.hash).offset().top - _0x44b5f6 - _0x7c6127 - 20,
          },
          500
        )
      $(window.location.hash).addClass('focus')
      setTimeout(function () {
        $(window.location.hash).removeClass('focus')
      }, 2000)
    }
  }
  $(document).on('click', 'a[href*="#"]', function (_0x1660e8) {
    var _0x205fb4 = '#' + $(this).attr('href').split('#')[1]
    if ($(_0x205fb4).length && $(this).attr('href').split('#')[0] === '') {
      _0x1660e8.preventDefault()
      var _0x4d43f7 = $('#header').outerHeight(),
        _0x27e78b = $('.is_single article .attr-sticky').outerHeight()
      _0x27e78b
        ? $('html, body')
            .stop()
            .animate(
              {
                scrollTop:
                  $(_0x205fb4).offset().top - _0x4d43f7 - _0x27e78b - 20,
              },
              500
            )
        : $('html, body')
            .stop()
            .animate(
              { scrollTop: $(_0x205fb4).offset().top - _0x4d43f7 - 20 },
              500
            )
      $(_0x205fb4).addClass('focus')
      setTimeout(function () {
        $(_0x205fb4).removeClass('focus')
      }, 2000)
    }
  })
  $(document).on('click', '.loadmore-btn', function (_0x304dc4) {
    _0x304dc4.preventDefault()
    let _0x42a772 = $(this).attr('href'),
      _0x685d93 = $('#blog-pager .loadmore-btn'),
      _0x5cc65d = $('#blog-pager .loadmore-btn').text()
    _0x42a772 &&
      $.ajax({
        url: _0x42a772,
        beforeSend: function () {
          _0x685d93.addClass('loading')
        },
        complete: function () {
          _0x685d93.removeClass('loading')
        },
        success: function (_0x444be2) {
          let _0x576af1 = $(_0x444be2).find('.Blog .is_loop').html(),
            _0x4c1f1a = $(_0x444be2).find('.loadmore-btn').attr('href')
          $('.Blog .is_loop').append(_0x576af1)
          _0x685d93.show()
          post_convert()
          post_sort()
          lazyload()
          timeago()
          _0x4c1f1a ? _0x685d93.attr('href', _0x4c1f1a) : _0x685d93.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var _0x995ebd = $('a.blog-pager-older-link').text(),
      _0x31ee6e = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(_0x31ee6e + ' article h1', function () {
      var _0x34ae01 = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
          _0x995ebd +
          '</b></small><h3>' +
          _0x34ae01 +
          '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        _0x31ee6e + ' article .post-body img:first-of-type',
        function () {
          var _0x5a4b11 = $(this).html(),
            _0x2c9a19 = _0x5a4b11.split('src="')[1],
            _0x256e1a = _0x2c9a19.split('"')[0],
            _0x1f3967 = _0x256e1a.split('=')[0],
            _0x554160 = _0x1f3967.split('/')[7]
          _0x1f3967 =
            _0x1f3967.replace(_0x554160, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + _0x1f3967 + '"/>')
            .removeClass('loading')
        }
      )
    })
    var _0x4fdcdd = $('a.blog-pager-newer-link').text(),
      _0x5e2818 = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(_0x5e2818 + ' article h1', function () {
      var _0x1ebe5f = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
          _0x4fdcdd +
          '</b></small><h3>' +
          _0x1ebe5f +
          '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        _0x5e2818 + ' article .post-body img:first-of-type',
        function () {
          var _0xd5e8b5 = $(this).html(),
            _0x110422 = _0xd5e8b5.split('src="')[1],
            _0x5ad15b = _0x110422.split('"')[0],
            _0x27f248 = _0x5ad15b.split('=')[0],
            _0xf64534 = _0x27f248.split('/')[7]
          _0x27f248 =
            _0x27f248.replace(_0xf64534, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + _0x27f248 + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
}
function timeago() {
  $('[datetime]:not(.timeago)').each(function () {
    var _0x59ab97 = $(this),
      _0x198f59 = _0x59ab97.attr('datetime')
    _0x59ab97.addClass('timeago')
    !_0x59ab97.attr('title') && _0x59ab97.attr('title', _0x198f59)
    _0x59ab97.text(_0x2a8b40(_0x198f59))
  })
  function _0x2a8b40(_0x5aeb7e) {
    var _0x4fb2b3 = 'ago',
      _0xc9b98 = 'seconds',
      _0x37bd0b = 'minutes',
      _0x46354b = 'hours',
      _0x5c787c = 'days',
      _0x2c50e1 = 'months',
      _0x2e79cc = 'years'
    $_config.local.country_id == 'id-ID' &&
      ((_0x4fb2b3 = 'yang lalu'),
      (_0xc9b98 = 'detik'),
      (_0x37bd0b = 'menit'),
      (_0x46354b = 'jam'),
      (_0x5c787c = 'hari'),
      (_0x2c50e1 = 'bulan'),
      (_0x2e79cc = 'tahun'))
    var _0x3c6c09 = new Date(_0x5aeb7e),
      _0x28f6e2 = 86400000,
      _0xbc76f6 = 30 * _0x28f6e2,
      _0x463433 = 365 * _0x28f6e2,
      _0x5e530f = _0x4fb2b3,
      _0x56974 = new Date() - _0x3c6c09
    return _0x56974 < 60000
      ? Math.round(_0x56974 / 1000) + ' ' + _0xc9b98 + ' ' + _0x5e530f
      : _0x56974 < 3600000
      ? Math.round(_0x56974 / 60000) + ' ' + _0x37bd0b + ' ' + _0x5e530f
      : _0x56974 < _0x28f6e2
      ? Math.round(_0x56974 / 3600000) + ' ' + _0x46354b + ' ' + _0x5e530f
      : _0x56974 < _0xbc76f6
      ? Math.round(_0x56974 / _0x28f6e2) + ' ' + _0x5c787c + ' ' + _0x5e530f
      : _0x56974 < _0x463433
      ? Math.round(_0x56974 / _0xbc76f6) + ' ' + _0x2c50e1 + ' ' + _0x5e530f
      : Math.round(_0x56974 / _0x463433) + ' ' + _0x2e79cc + ' ' + _0x5e530f
  }
  $('#comments .datetime a:not(.timeago)').each(function () {
    var _0x4d6c7d = $(this),
      _0x145d88 = _0x4d6c7d.text()
    _0x4d6c7d.attr('datetime', _0x145d88)
    var _0x347bd1 = _0x4d6c7d.attr('datetime')
    _0x4d6c7d.addClass('timeago')
    _0x4d6c7d.attr('title', _0x347bd1)
    _0x4d6c7d.text(_0x2a8b40(_0x347bd1))
  })
}
function format_price(_0x59385c, _0x33c8dd, _0x54aedc) {
  return new Intl.NumberFormat(_0x33c8dd, {
    style: 'currency',
    currency: _0x54aedc,
    maximumSignificantDigits: 3,
  }).format(_0x59385c)
}
function separator(_0xce1668, _0x5d212b = '') {
  var _0x1a45b1 = '',
    _0x14501f = _0xce1668.toString().split('').reverse().join('')
  for (var _0x61c098 = 0; _0x61c098 < _0x14501f.length; _0x61c098++) {
    if (_0x61c098 % 3 == 0) {
      _0x1a45b1 += _0x14501f.substr(_0x61c098, 3) + '.'
    }
  }
  return _0x5d212b
    ? _0x5d212b +
        ' ' +
        _0x1a45b1
          .split('', _0x1a45b1.length - 1)
          .reverse()
          .join('')
    : _0x1a45b1
        .split('', _0x1a45b1.length - 1)
        .reverse()
        .join('')
}
function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
      ' <div id="pop-video" data-pop-title="Video" data-pop-width="960">   <div class="video">  <iframe allowfullscreen="true"></iframe>   </div> </div> '),
    $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function () {
    var _0x245747 = $(this),
      _0x3c1327 = _0x245747.attr('id'),
      _0x1c6ea3 = _0x245747.attr('data-pop-title'),
      _0x493026 = _0x245747.attr('data-pop-width'),
      _0x42e0c1 = _0x245747.attr('data-pop-height')
    _0x245747.wrap('<div class="pop"></div>')
    _0x245747.wrap('<div class="pop-wrap"></div>')
    _0x245747.addClass('pop-content pop-loaded')
    var _0x2aa292 =
      '   <header class="pop-header">  <div class="pop-title">    <h3>   ' +
      _0x1c6ea3 +
      '    </h3>  </div>  <div class="pop-close">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>  </div>   </header> '
    _0x245747.closest('.pop-wrap').prepend(_0x2aa292)
    _0x493026 && _0x245747.closest('.pop-wrap').css('width', _0x493026)
  })
  $('.pop-close').on('click', function () {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function (_0x3e8aa4) {
    _0x3e8aa4.preventDefault()
    var _0x7e28b7 = $(this),
      _0xbb238 = _0x7e28b7.attr('target'),
      _0x2599da = _0x7e28b7.attr('data-pop-title')
        ? _0x7e28b7.attr('data-pop-title')
        : $('#' + _0xbb238).attr('data-pop-title'),
      _0x56b123 = _0x7e28b7.attr('data-pop-width'),
      _0x44807a = _0x7e28b7.attr('data-pop-height')
    _0x7e28b7.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + _0xbb238).length &&
      ($('body').addClass('pop-open'),
      $('#' + _0xbb238)
        .closest('.pop')
        .addClass('open'),
      _0x7e28b7.closest('.pop-content').length &&
        (($back_id = _0x7e28b7.closest('.pop-content').attr('id')),
        (_0x2599da =
          '<a target="' +
          $back_id +
          '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
          _0x2599da)),
      _0x2599da &&
        $('#' + _0xbb238)
          .closest('.pop')
          .find('.pop-title h3')
          .html(_0x2599da),
      $('[data-src]').each(function () {
        var _0x500b9f = $(this).attr('data-src')
        $(this).attr('src', _0x500b9f).removeAttr('data-src')
      }))
    if (_0xbb238 == 'pop-video') {
      $href = $(this).attr('href')
      var _0x1ac7dd = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (_0x1ac7dd = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + _0x1ac7dd + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function () {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function (_0x4dd847) {
    _0x4dd847.stopPropagation()
  })
}
function lightbox() {
  $('.lightbox-auto').length &&
    $('.lightbox-auto').each(function () {
      $('img', this)
        .closest('a')
        .each(function () {
          $(this).addClass('lightbox')
        })
    })
  if ($('.lightbox:not([target])').length) {
    var _0x578441 = '   <div id="lightbox">  <figure></figure>   </div> '
    $('body').append(_0x578441)
    $(document).on('click', '.lightbox:not([target])', function (_0x7a678) {
      _0x7a678.preventDefault()
      var _0x2dc28a = $(this).attr('href')
      $('#lightbox').addClass('open')
      $('#lightbox figure').addClass('loading')
      $('#lightbox figure').html('<img src="' + _0x2dc28a + '"/>')
      $('#lightbox figure img').on('load', function () {
        $('#lightbox figure').removeClass('loading')
        $(this).addClass('open')
      })
    })
    $(document).on('click', '#lightbox', function (_0x38719b) {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
    $(window).on('scroll', function () {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
  }
}
function lazyload() {
  $('[data-bg]').each(function () {
    var _0x2c7245 = $(this),
      _0x4c4be5 = _0x2c7245.attr('data-bg')
    _0x2c7245
      .css('background-image', 'url(' + _0x4c4be5 + ')')
      .removeAttr('data-bg')
  })
  $('[data-src]:not([lazy="true"])').each(function () {
    var _0x2a8470 = $(this),
      _0x55a76f = $(window).height(),
      _0x508eaa = $(window).scrollTop(),
      _0x4a1a23 = _0x508eaa + _0x55a76f,
      _0x50d5b9 = _0x2a8470.offset().top
    _0x2a8470.attr('data-offset-top', _0x50d5b9)
    var _0x5bc808 = _0x2a8470.attr('data-src')
    _0x5bc808 = _0x5bc808.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x5bc808 = _0x5bc808.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x5bc808 = _0x5bc808.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    _0x5bc808 = _0x5bc808.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    var _0x4a1773 = _0x2a8470.prop('tagName').toLowerCase()
    if (_0x50d5b9 <= _0x4a1a23) {
      if (_0x4a1773 == 'img') {
        _0x2a8470.attr('src', _0x5bc808).removeAttr('data-src')
        _0x2a8470.attr('lazy', 'true')
      } else {
        _0x4a1773 == 'iframe' &&
          (_0x2a8470.attr('src', _0x5bc808).removeAttr('data-src'),
          _0x2a8470.attr('lazy', 'true'))
      }
    }
  })
  $(window).on('scroll', function () {
    var _0x41f709 = $(window).height(),
      _0x130630 = $(window).scrollTop(),
      _0x15d117 = _0x130630 + _0x41f709
    $('[data-src]:not([lazy="true"])').each(function () {
      var _0x5a8417 = $(this),
        _0x2cdcbb = $(window).height(),
        _0x17989f = _0x5a8417.offset().top,
        _0x2196f9 = _0x5a8417.attr('data-src')
      _0x2196f9 = _0x2196f9.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x2196f9 = _0x2196f9.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x2196f9 = _0x2196f9.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      _0x2196f9 = _0x2196f9.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var _0x245d08 = _0x5a8417.prop('tagName').toLowerCase()
      if (_0x17989f <= _0x15d117) {
        if (_0x245d08 == 'img') {
          _0x5a8417.attr('src', _0x2196f9).removeAttr('data-src')
          _0x5a8417.attr('lazy', 'true')
        } else {
          _0x245d08 == 'iframe' &&
            (_0x5a8417.attr('src', _0x2196f9).removeAttr('data-src'),
            _0x5a8417.attr('lazy', 'true'))
        }
      }
    })
  })
}
function titleCase(_0x1ca12d) {
  _0x1ca12d = _0x1ca12d.split(' ')
  for (var _0x23e6bd = 0; _0x23e6bd < _0x1ca12d.length; _0x23e6bd++) {
    _0x1ca12d[_0x23e6bd] =
      _0x1ca12d[_0x23e6bd].charAt(0).toUpperCase() +
      _0x1ca12d[_0x23e6bd].slice(1)
  }
  return (_0x1ca12d = _0x1ca12d.join(' ')), _0x1ca12d
}
function $_GET(_0x2ad8d1) {
  var _0x5865f3 = window.location.search.substring(1),
    _0x4b1569 = _0x5865f3.split('&'),
    _0x45885c,
    _0x43f89f
  for (_0x43f89f = 0; _0x43f89f < _0x4b1569.length; _0x43f89f++) {
    _0x45885c = _0x4b1569[_0x43f89f].split('=')
    if (_0x45885c[0] === _0x2ad8d1) {
      return _0x45885c[1] === undefined
        ? true
        : decodeURIComponent(_0x45885c[1])
    }
  }
}
function get_url_parameter(_0x46ca27, _0x4aa93d) {
  _0x46ca27 = _0x46ca27.replace(/[\[\]]/g, '\\$&')
  var _0x1d8d18 = new RegExp('[?&]' + _0x46ca27 + '(=([^&#]*)|&|#|$)'),
    _0xc6601b = _0x1d8d18.exec(_0x4aa93d)
  if (!_0xc6601b) {
    return null
  }
  if (!_0xc6601b[2]) {
    return ''
  }
  return decodeURIComponent(_0xc6601b[2].replace(/\+/g, ' '))
}
