const $license_item = 'simstore-blogger-template'
license()

function license() {
  function gv(gw) {
    function gx(gy) {
      try {
        return btoa(atob(gy)) == gy
      } catch (gz) {
        return false
      }
    }
    if (gx(gw)) {
      gw = atob(gw)
      gw = gw.replaceAll('XXX', '.')
      gw = gw.replaceAll('YY', '-')
      gw = gw.replaceAll('O5', 'a')
      gw = gw.replaceAll('E4', 'i')
      gw = gw.replaceAll('U3', 'u')
      gw = gw.replaceAll('I2', 'e')
      gw = gw.replaceAll('A1', 'o')

      function ha(hb) {
        const hc = hb.split(''),
          hd = hc.reverse(),
          he = hd.join('')
        return he
      }
      return (gw = ha(gw)), gw
    } else {
      return ''
    }
  }

  function hf(hg) {
    var hh =
      '            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">            <style>hr { margin:0!important; } body { padding: 0px!important; } * { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; }</style>            <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;">                <div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;">                    <svg style="fill:#636363;width:100px;height:100px;display:block;margin:0 auto 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg>                    <h2><b>Peringatan</b> :</h2>                    <br>                    <p>' +
      hg +
      '</p>                    <br>                    <hr style="border:0;border-top:1px solid #ddd;">                    <br>                    <a href="https://lapak.kangrian.net/' +
      $license_item +
      '" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:1px;">https://lapak.kangrian.net</a>                </div>            </div>        '
    return (document.body.innerHTML = hh)
  }
  if (typeof $license_key === 'undefined') {
    hf('Dilarang menghapus variable <b>$license_key</b>..')
  } else {
    if (typeof $license_item === 'undefined') {
      hf('Dilarang menghapus variable <b>$license_item</b>..')
    } else {
      if (
        location.hostname.indexOf('localhost') != -1 ||
        location.hostname.indexOf('.blogspot.com') != -1 ||
        location.hostname.indexOf('.blogger.com') != -1
      ) {
        console.log(
          'Developed by. https://kangrian.net ( Free / Trial Version )'
        )
        var hi = document.getElementById('copyright')
        if (hi === null) {
          hf(
            '<b>Hargailah Hak Cipta</b><br><br><small>Gunakan "Lisensi Premium" untuk menghapus credit.</small><br><br><small>#ERR_COPYRIGHT</small>'
          )
        } else {
          var hj = new Date().getFullYear()
          hi.innerHTML =
            '&#0169;' +
            hj +
            ' &#8212; Made with. <a href="https://lapak.kangrian.net/' +
            $license_item +
            '" target="_blank"><b>Kr</b></a>'
          hi.setAttribute(
            'style',
            'display:inline-block!important;opacity:1!important;position:static!important;visibility:visible!important;text-indent:0px!important;color:currentColor!important'
          )
        }
      } else {
        if ($license_key === '') {
          hf(
            '<b>Kode Lisensi</b> dibutuhkan..<br><br><small>#ERR_LICENSE</small>'
          )
        } else {
          const hk = gv($license_key).split('|')[0],
            hl = gv($license_key).split('|')[1]
          if (hk == '' || hk == undefined) {
            hf(
              '<b>Kode Lisensi</b> yang digunakan tidak valid.</b><br><br><small>#ERR_KEY</small>'
            )
          } else {
            if (location.hostname.indexOf(hk) == -1) {
              hf(
                '<b>Kode Lisensi</b> hanya bisa digunakan pada website dengan domain : <b>' +
                hk +
                '</b><br><br><small>#ERR_DOMAIN</small>'
              )
            } else {
              if (hl != $license_item) {
                function hm(hn) {
                  hn = hn.split(' ')
                  for (
                    var ho = 0; ho < hn.length; ho++
                  ) {
                    hn[ho] =
                      hn[ho].charAt(0).toUpperCase() +
                      hn[ho].slice(1)
                  }
                  return (hn = hn.join(' ')), hn
                }
                hf(
                  '<b>Kode Lisensi</b> hanya bisa digunakan untuk <b>' +
                  hm($license_item.replaceAll('-', ' ')) +
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
window.onload = function() {
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
    var hp = $('table .cta_link').html().split('<br>')
    if (hp.length && hp[0] != '') {
      for (i in hp) {
        var hq = hp[i].split(',')[0],
          hs = hp[i].split(',')[1],
          ht = '//' + hs.split('/')[2]
        ht = ht
          .replace('//www.', '')
          .replace('//m.', '')
          .replace('//api.', '')
          .replace('//web.', '')
          .replace('//', '')
        var hu =
          '<a class="btn" href="' +
          hs +
          '" target="_popwin"><img src="https://www.google.com/s2/favicons?domain=' +
          ht +
          '&sz=32" style="float:right;"/>' +
          hq +
          '</a>'
        $(hu).appendTo('#pop-cta-link .grid-cta')
      }
      $('.article-right .cta .link').html($('table .cta_link_order').html())
      $('.article-right .cta .link').removeAttr('href')
      $('.article-right .cta .link').attr('target', 'pop-cta-link')
    }
  }
}

function slideshow() {
  $('.slideshow').each(function() {
    var hv = $(this),
      hw = 4000,
      hx = parseInt(hv.attr('data-delay')),
      hy = 1000,
      hz = parseInt(hv.attr('data-fade')),
      ia
    hx.length && (hw = hx)
    hz.length && (hy = hz)
    $('.slideshow-item, .widget', hv).length > 1 &&
      ((ia = setInterval(function() {
          $('.slideshow-item:visible, .widget:visible', hv).each(
            function() {
              var ib = $(this)
              ib.hide()
              ib.next('.slideshow-item, .widget').length ?
                ib.next('.slideshow-item, .widget').fadeIn(hy) :
                ib
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .first()
                .fadeIn(hy)
            }
          )
        }, hw)),
        $(this).append(
          '  <button class="nav-left">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   '
        ))
    $('.nav-left', hv).on('click', function() {
      clearInterval(ia)
      $('.slideshow-item:visible, .widget:visible', hv).each(
        function() {
          var ic = $(this)
          ic.hide()
          ic.prev('.slideshow-item, .widget').length ?
            ic.prev('.slideshow-item, .widget').fadeIn(hy) :
            ic
            .closest('.slideshow')
            .find('.slideshow-item, .widget')
            .last()
            .fadeIn(hy)
        }
      )
    })
    $('.nav-right', hv).on('click', function() {
      clearInterval(ia)
      $('.slideshow-item:visible, .widget:visible', hv).each(
        function() {
          var ie = $(this)
          ie.hide()
          ie.next('.slideshow-item, .widget').length ?
            ie.next('.slideshow-item, .widget').fadeIn(hy) :
            ie
            .closest('.slideshow')
            .find('.slideshow-item, .widget')
            .first()
            .fadeIn(hy)
        }
      )
    })
  })
}

function darkmode() {
  localStorage.getItem('darkmode') == 1 && $('a[href="#darkmode"] i').toggle()
  $('a[href="#darkmode"]').on('click', function(ig) {
    ig.preventDefault()
    $('html').toggleClass('dark')
    $('i', this).toggle()
    localStorage.getItem('darkmode') == 1 ?
      localStorage.setItem('darkmode', 0) :
      localStorage.setItem('darkmode', 1)
    darkmode_head()
  })
}

function post_sort() {
  $('#sort select').on('change', function() {
    $('#sort').addClass('loading')
    if ($(this).val() == 'terbaru') {
      var ih = $('.Blog article')
      ih.sort(function(ii, ij) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', ij).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', ii).attr('content')
          ).getTime()
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ih)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terlama') {
      var ih = $('.Blog article')
      ih.sort(function(ik, il) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', ik).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', il).attr('content')
          ).getTime()
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ih)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terendah') {
      var ih = $('.Blog article')
      ih.sort(function(im, io) {
        return (
          $('.harga [data-harga]', im).attr('data-harga') -
          $('.harga [data-harga]', io).attr('data-harga')
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ih)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'tertinggi') {
      var ih = $('.Blog article')
      ih.sort(function(ip, iq) {
        return (
          $('.harga [data-harga]', iq).attr('data-harga') -
          $('.harga [data-harga]', ip).attr('data-harga')
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ih)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
  })
  $('#sort select').val() != 'terbaru' && $('#sort select').trigger('change')
}

function post_convert() {
  $('article:not(.field_loaded)').each(function() {
    var ir = $(this)
    ir.addClass('field_loaded')
    ir.hasClass('is_post') &&
      $('.field .gambar', this).length &&
      $('.field .gambar img', this).each(function(is) {
        if (is > 0) {
          var it = $(this).attr('src').split('=')[0],
            iu = it.split('/')[7],
            iv =
            it.replace(iu, 'w150-h150-c') + '=w150-h150-c',
            iw = it.replace(iu, 's1000') + '=s1000'
          $('figure.cover', ir).append(
            '<a class="lightbox" href="' +
            iw +
            '"><img data-src="' +
            iv +
            '"/></a>'
          )
        }
      })
    var ix = ''
    $('.field .status', ir).length &&
      (ix = $('.field .status', ir)
        .text()
        .replaceAll('  ', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var iy = ''
    $('.field .harga_normal', ir).length &&
      (iy = $('.field .harga_normal', ir)
        .text()
        .replaceAll(' ', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var iz = ''
    $('.field .harga_diskon', ir).length &&
      (iz = $('.field .harga_diskon', ir)
        .text()
        .replaceAll(' ', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var ja = ''
    $('.field .cta_whatsapp', ir).length &&
      (ja = $('.field .cta_whatsapp', ir)
        .text()
        .replaceAll(' ', '')
        .replaceAll('+', '')
        .replaceAll('-', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var jb = ''
    if (iy) {
      jb += '<div class="harga"><span class="wrap">'
      if (!ir.hasClass('is_post') && ix == 'off') {
        jb +=
          '                        <small class="off">' +
          $_config.cta.order_button_off +
          '</small><span data-harga="' +
          iy +
          '">' +
          format_price(
            iy,
            $_config.local.country_id,
            $_config.local.currency
          ) +
          '</span>                    '
        $('[itemprop="price"]', this).attr('content', iy)
      } else {
        if (iz) {
          var jc = ''
          iz.includes('%') ?
            ((jc = iz.replaceAll('%', '')),
              (iz = Number(iy - (iy * jc) / 100))) :
            (jc = Math.round(100 - (iz / iy) * 100))
          jb +=
            '                            <small class="persen">-' +
            jc +
            '%</small><s>' +
            format_price(
              iy,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</s> <b data-harga="' +
            iz +
            '">' +
            format_price(
              iz,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</b>                        '
          $('[itemprop="price"]', this).attr('content', iz)
        } else {
          jb +=
            '                            <span data-harga="' +
            iy +
            '">' +
            format_price(
              iy,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</span>                        '
          $('[itemprop="price"]', this).attr('content', iy)
        }
      }
      jb += '</span></div>'
      ix == 'off' &&
        ($(this).addClass('off'),
          $(this)
          .closest('article')
          .find('[itemprop="availability"]')
          .attr('content', 'https://schema.org/OutOfStock'))
    }
    ir.hasClass('is_post') &&
      (ix == 'off' ?
        (jb +=
          '<div class="cta"><a class="link off" href="#off">' +
          $_config.cta.order_button_off +
          '</a><a class="bagikan" target="pop-bagikan"><i class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg></i></a></div>') :
        (($admin = encodeURIComponent(
            $('[itemprop="author"] b', this).text()
          ).replaceAll('%0A', '')),
          (jd = encodeURIComponent(
            $('h1.title', this).text()
          ).replaceAll('%0A', '')),
          (jb +=
            '<div class="cta"><a class="link" href="https://api.whatsapp.com/send?phone=' +
            (ja ? ja : $_config.cta.whatsapp) +
            '&text=' +
            $_config.cta.order_text
            .replaceAll('[admin]', $admin)
            .replaceAll('[title]', jd) +
            '%0A%0Avia. ' +
            $_config.url.canonical +
            '" target="_popwin"><i class="icon left"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg></i> ' +
            $_config.cta.order_button_text +
            '</a><a class="bagikan" target="pop-bagikan"><i class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg></i></a></div>')))
    var jd = $('.title', this)
    $(jb).insertAfter(jd)
  })
}

function popwin() {
  $(document).on('click', '[target="_popwin"]', function(je) {
    je.stopPropagation()
    je.preventDefault()
    var jf = $(this).attr('href'),
      jg = $(this).attr('data-popwin-width'),
      jh = $(this).attr('data-popwin-height'),
      ji = 960
    jg && (ji = jg)
    var jj = 540
    jh && (jj = jh)
    var jk = Number(screen.width / 2 - ji / 2),
      jl = Number(screen.height / 2 - jj / 2),
      jm = window.open(
        jf,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
        ji +
        ', height=' +
        jj +
        ', top=' +
        jl +
        ', left=' +
        jk
      )
    jm.focus()
  })
}

function shortcode() {
  $('.post-body').each(function() {
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
  $('[data-shortcode]').each(function() {
    var jn = $(this).attr('data-shortcode')
    if (jn == 'img') {
      var jo = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + jo + '"></a>')
    }
    if (jn == 'youtube') {
      var jp = $(this).attr('data-src'),
        jq = jp.split('/')[3]
      jp.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (jq = get_url_parameter('v', jp))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + jq + '?rel=0'
      )
    }
  })
}

function etc() {
  $(window).on('beforeunload', function() {
    $('body').addClass('loading')
    setTimeout(function() {
      $('body').removeClass('loading')
    }, 2000)
  })
  $(window).on('scroll', function() {
    $(window).scrollTop() > 0 ?
      $('#header').addClass('shadow') :
      $('#header').removeClass('shadow')
  })
  $('.LinkList li a[href*="#"]').each(function() {
    $(this).attr('href', 'javascript:void(0)')
    $(this).append(
      '<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>'
    )
    var jr = $(this).parent('li')
    jr.addClass('dropdown')
    jr.wrapInner('<span class="dropdown-title"></span>')
    jr.append('<ul class="sub"></ul>')
  })
  $('.LinkList li a:contains("_")').each(function() {
    var js = $(this).parent('li').prev('.dropdown').find('ul')
    $(this).parent('li').appendTo(js)
    var jt = $(this).text().replaceAll('_', '').replaceAll('_ ', '')
    $(this).text(jt)
  })
  $('.LinkList').on('click', 'li.dropdown', function() {
    $(this).find('ul:first').toggle()
    $(this).toggleClass('active')
  })
  $('[data-feed]').length &&
    $('[data-feed]').each(function() {
      var ju = $(this),
        jv = $(this).attr('data-feed')
      ju.addClass('loading')
      ju.load(jv + ' .is_loop', function() {
        var jw = $(this).html()
        ju.html(jw)
        var jx = ju.attr('data-hide-id')
        jx &&
          (ju.find('article#' + jx).length ?
            ju.find('article#' + jx).remove() :
            ju.find('article:last-of-type').remove())
        post_convert()
        lazyload()
        timeago()
        ju.removeClass('loading')
      })
    })
  $('#pop-bagikan .copy button').on('click', function(jy) {
    var jz = $(this)
    jz.siblings('input').select()
    document.execCommand('copy')
    jz.text('Disalin!')
    setTimeout(function() {
      jz.text('Salin')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var ka = $('#header').outerHeight(),
        kb = $('.is_single article .attr-sticky').outerHeight()
      $('html, body')
        .stop()
        .animate({
            scrollTop: $(window.location.hash).offset().top - ka - kb - 20,
          },
          500
        )
      $(window.location.hash).addClass('focus')
      setTimeout(function() {
        $(window.location.hash).removeClass('focus')
      }, 2000)
    }
  }
  $(document).on('click', 'a[href*="#"]', function(kc) {
    var kd = '#' + $(this).attr('href').split('#')[1]
    if ($(kd).length && $(this).attr('href').split('#')[0] === '') {
      kc.preventDefault()
      var ke = $('#header').outerHeight(),
        kf = $('.is_single article .attr-sticky').outerHeight()
      kf
        ?
        $('html, body')
        .stop()
        .animate({
            scrollTop: $(kd).offset().top - ke - kf - 20,
          },
          500
        ) :
        $('html, body')
        .stop()
        .animate({
            scrollTop: $(kd).offset().top - ke - 20
          },
          500
        )
      $(kd).addClass('focus')
      setTimeout(function() {
        $(kd).removeClass('focus')
      }, 2000)
    }
  })
  $(document).on('click', '.loadmore-btn', function(kg) {
    kg.preventDefault()
    let kh = $(this).attr('href'),
      ki = $('#blog-pager .loadmore-btn'),
      kj = $('#blog-pager .loadmore-btn').text()
    kh &&
      $.ajax({
        url: kh,
        beforeSend: function() {
          ki.addClass('loading')
        },
        complete: function() {
          ki.removeClass('loading')
        },
        success: function(kk) {
          let kl = $(kk).find('.Blog .is_loop').html(),
            km = $(kk).find('.loadmore-btn').attr('href')
          $('.Blog .is_loop').append(kl)
          ki.show()
          post_convert()
          post_sort()
          lazyload()
          timeago()
          km ? ki.attr('href', km) : ki.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var kn = $('a.blog-pager-older-link').text(),
      ko = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(ko + ' article h1', function() {
      var kp = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
        kn +
        '</b></small><h3>' +
        kp +
        '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        ko + ' article .post-body img:first-of-type',
        function() {
          var kq = $(this).html(),
            ks = kq.split('src="')[1],
            kt = ks.split('"')[0],
            ku = kt.split('=')[0],
            kv = ku.split('/')[7]
          ku =
            ku.replace(kv, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + ku + '"/>')
            .removeClass('loading')
        }
      )
    })
    var kw = $('a.blog-pager-newer-link').text(),
      kx = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(kx + ' article h1', function() {
      var ky = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
        kw +
        '</b></small><h3>' +
        ky +
        '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        kx + ' article .post-body img:first-of-type',
        function() {
          var kz = $(this).html(),
            la = kz.split('src="')[1],
            lb = la.split('"')[0],
            lc = lb.split('=')[0],
            ld = lc.split('/')[7]
          lc =
            lc.replace(ld, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + lc + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
}

function timeago() {
  $('[datetime]:not(.timeago)').each(function() {
    var le = $(this),
      lf = le.attr('datetime')
    le.addClass('timeago') !le.attr('title') && le.attr('title', lf)
    le.text(lg(lf))
  })

  function lg(lh) {
    var lj = 'ago',
      lk = 'seconds',
      ll = 'minutes',
      lm = 'hours',
      ln = 'days',
      lo = 'months',
      lp = 'years'
    $_config.local.country_id == 'id-ID' &&
      ((lj = 'yang lalu'),
        (lk = 'detik'),
        (ll = 'menit'),
        (lm = 'jam'),
        (ln = 'hari'),
        (lo = 'bulan'),
        (lp = 'tahun'))
    var lq = new Date(lh),
      lr = 86400000,
      ls = 30 * lr,
      lt = 365 * lr,
      lu = lj,
      lv = new Date() - lq
    return lv < 60000 ?
      Math.round(lv / 1000) + ' ' + lk + ' ' + lu :
      lv < 3600000 ?
      Math.round(lv / 60000) + ' ' + ll + ' ' + lu :
      lv < lr ?
      Math.round(lv / 3600000) + ' ' + lm + ' ' + lu :
      lv < ls ?
      Math.round(lv / lr) + ' ' + ln + ' ' + lu :
      lv < lt ?
      Math.round(lv / ls) + ' ' + lo + ' ' + lu :
      Math.round(lv / lt) + ' ' + lp + ' ' + lu
  }
  $('#comments .datetime a:not(.timeago)').each(function() {
    var lw = $(this),
      lx = lw.text()
    lw.attr('datetime', lx)
    var ly = lw.attr('datetime')
    lw.addClass('timeago')
    lw.attr('title', ly)
    lw.text(lg(ly))
  })
}

function format_price(lz, ma, mb) {
  return new Intl.NumberFormat(ma, {
    style: 'currency',
    currency: mb,
    maximumSignificantDigits: 3,
  }).format(lz)
}

function separator(mc, md = '') {
  var me = '',
    mf = mc.toString().split('').reverse().join('')
  for (var mg = 0; mg < mf.length; mg++) {
    if (mg % 3 == 0) {
      me += mf.substr(mg, 3) + '.'
    }
  }
  return md ?
    md +
    ' ' +
    me
    .split('', me.length - 1)
    .reverse()
    .join('') :
    me
    .split('', me.length - 1)
    .reverse()
    .join('')
}

function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
        ' <div id="pop-video" data-pop-title="Video" data-pop-width="960">   <div class="video">  <iframe allowfullscreen="true"></iframe>   </div> </div> '),
      $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function() {
    var mh = $(this),
      mi = mh.attr('id'),
      mj = mh.attr('data-pop-title'),
      mk = mh.attr('data-pop-width'),
      ml = mh.attr('data-pop-height')
    mh.wrap('<div class="pop"></div>')
    mh.wrap('<div class="pop-wrap"></div>')
    mh.addClass('pop-content pop-loaded')
    var mm =
      '   <header class="pop-header">  <div class="pop-title">    <h3>   ' +
      mj +
      '    </h3>  </div>  <div class="pop-close">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>  </div>   </header> '
    mh.closest('.pop-wrap').prepend(mm)
    mk && mh.closest('.pop-wrap').css('width', mk)
  })
  $('.pop-close').on('click', function() {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function(mn) {
    mn.preventDefault()
    var mo = $(this),
      mp = mo.attr('target'),
      mq = mo.attr('data-pop-title') ?
      mo.attr('data-pop-title') :
      $('#' + mp).attr('data-pop-title'),
      mr = mo.attr('data-pop-width'),
      ms = mo.attr('data-pop-height')
    mo.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + mp).length &&
      ($('body').addClass('pop-open'),
        $('#' + mp)
        .closest('.pop')
        .addClass('open'),
        mo.closest('.pop-content').length &&
        (($back_id = mo.closest('.pop-content').attr('id')),
          (mq =
            '<a target="' +
            $back_id +
            '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
            mq)),
        mq &&
        $('#' + mp)
        .closest('.pop')
        .find('.pop-title h3')
        .html(mq),
        $('[data-src]').each(function() {
          var mt = $(this).attr('data-src')
          $(this).attr('src', mt).removeAttr('data-src')
        }))
    if (mp == 'pop-video') {
      $href = $(this).attr('href')
      var mu = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (mu = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + mu + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function() {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function(mv) {
    mv.stopPropagation()
  })
}

function lightbox() {
  $('.lightbox-auto').length &&
    $('.lightbox-auto').each(function() {
      $('img', this)
        .closest('a')
        .each(function() {
          $(this).addClass('lightbox')
        })
    })
  if ($('.lightbox:not([target])').length) {
    var mw = '   <div id="lightbox">  <figure></figure>   </div> '
    $('body').append(mw)
    $(document).on('click', '.lightbox:not([target])', function(mx) {
      mx.preventDefault()
      var my = $(this).attr('href')
      $('#lightbox').addClass('open')
      $('#lightbox figure').addClass('loading')
      $('#lightbox figure').html('<img src="' + my + '"/>')
      $('#lightbox figure img').on('load', function() {
        $('#lightbox figure').removeClass('loading')
        $(this).addClass('open')
      })
    })
    $(document).on('click', '#lightbox', function(mz) {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
    $(window).on('scroll', function() {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
  }
}

function lazyload() {
  $('[data-bg]').each(function() {
    var na = $(this),
      nb = na.attr('data-bg')
    na
      .css('background-image', 'url(' + nb + ')')
      .removeAttr('data-bg')
  })
  $('[data-src]:not([lazy="true"])').each(function() {
    var nc = $(this),
      nd = $(window).height(),
      ne = $(window).scrollTop(),
      nf = ne + nd,
      ng = nc.offset().top
    nc.attr('data-offset-top', ng)
    var nh = nc.attr('data-src')
    nh = nh.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    nh = nh.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    nh = nh.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    nh = nh.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    var ni = nc.prop('tagName').toLowerCase()
    if (ng <= nf) {
      if (ni == 'img') {
        nc.attr('src', nh).removeAttr('data-src')
        nc.attr('lazy', 'true')
      } else {
        ni == 'iframe' &&
          (nc.attr('src', nh).removeAttr('data-src'),
            nc.attr('lazy', 'true'))
      }
    }
  })
  $(window).on('scroll', function() {
    var nj = $(window).height(),
      nk = $(window).scrollTop(),
      nl = nk + nj
    $('[data-src]:not([lazy="true"])').each(function() {
      var nm = $(this),
        nn = $(window).height(),
        np = nm.offset().top,
        nq = nm.attr('data-src')
      nq = nq.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      nq = nq.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      nq = nq.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      nq = nq.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var nr = nm.prop('tagName').toLowerCase()
      if (np <= nl) {
        if (nr == 'img') {
          nm.attr('src', nq).removeAttr('data-src')
          nm.attr('lazy', 'true')
        } else {
          nr == 'iframe' &&
            (nm.attr('src', nq).removeAttr('data-src'),
              nm.attr('lazy', 'true'))
        }
      }
    })
  })
}

function titleCase(ns) {
  ns = ns.split(' ')
  for (var nt = 0; nt < ns.length; nt++) {
    ns[nt] =
      ns[nt].charAt(0).toUpperCase() +
      ns[nt].slice(1)
  }
  return (ns = ns.join(' ')), ns
}

function $_GET(nu) {
  var nv = window.location.search.substring(1),
    nw = nv.split('&'),
    nx,
    ny
  for (ny = 0; ny < nw.length; ny++) {
    nx = nw[ny].split('=')
    if (nx[0] === nu) {
      return nx[1] === undefined ?
        true :
        decodeURIComponent(nx[1])
    }
  }
}

function get_url_parameter(nz, oa) {
  nz = nz.replace(/[\[\]]/g, '\\$&')
  var ob = new RegExp('[?&]' + nz + '(=([^&#]*)|&|#|$)'),
    oc = ob.exec(oa)
  if (!oc) {
    return null
  }
  if (!oc[2]) {
    return ''
  }
  return decodeURIComponent(oc[2].replace(/\+/g, ' '))
}

function license() {
  function f(h) {
    function j(k) {
      try {
        return btoa(atob(k)) == k
      } catch (l) {
        return false
      }
    }
    if (j(h)) {
      h = atob(h)
      h = h.replaceAll('XXX', '.')
      h = h.replaceAll('YY', '-')
      h = h.replaceAll('O5', 'a')
      h = h.replaceAll('E4', 'i')
      h = h.replaceAll('U3', 'u')
      h = h.replaceAll('I2', 'e')
      h = h.replaceAll('A1', 'o')

      function q(t) {
        const w = t.split(''),
          x = w.reverse(),
          y = x.join('')
        return y
      }
      return (h = q(h)), h
    } else {
      return ''
    }
  }

  function z(aa) {
    var ab =
      '            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">            <style>hr { margin:0!important; } body { padding: 0px!important; } * { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; }</style>            <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;">                <div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;">                    <svg style="fill:#636363;width:100px;height:100px;display:block;margin:0 auto 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg>                    <h2><b>Peringatan</b> :</h2>                    <br>                    <p>' +
      aa +
      '</p>                    <br>                    <hr style="border:0;border-top:1px solid #ddd;">                    <br>                    <a href="https://lapak.kangrian.net/' +
      $license_item +
      '" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:1px;">https://lapak.kangrian.net</a>                </div>            </div>        '
    return (document.body.innerHTML = ab)
  }
  if (typeof $license_key === 'undefined') {
    z('Dilarang menghapus variable <b>$license_key</b>..')
  } else {
    if (typeof $license_item === 'undefined') {
      z('Dilarang menghapus variable <b>$license_item</b>..')
    } else {
      if (
        location.hostname.indexOf('localhost') != -1 ||
        location.hostname.indexOf('.blogspot.com') != -1 ||
        location.hostname.indexOf('.blogger.com') != -1
      ) {
        console.log(
          'Developed by. https://kangrian.net ( Free / Trial Version )'
        )
        var ac = document.getElementById('copyright')
        if (ac === null) {
          z(
            '<b>Hargailah Hak Cipta</b><br><br><small>Gunakan "Lisensi Premium" untuk menghapus credit.</small><br><br><small>#ERR_COPYRIGHT</small>'
          )
        } else {
          var ad = new Date().getFullYear()
          ac.innerHTML =
            '&#0169;' +
            ad +
            ' &#8212; Made with. <a href="https://lapak.kangrian.net/' +
            $license_item +
            '" target="_blank"><b>Kr</b></a>'
          ac.setAttribute(
            'style',
            'display:inline-block!important;opacity:1!important;position:static!important;visibility:visible!important;text-indent:0px!important;color:currentColor!important'
          )
        }
      } else {
        if ($license_key === '') {
          z(
            '<b>Kode Lisensi</b> dibutuhkan..<br><br><small>#ERR_LICENSE</small>'
          )
        } else {
          const ae = f($license_key).split('|')[0],
            af = f($license_key).split('|')[1]
          if (ae == '' || ae == undefined) {
            z(
              '<b>Kode Lisensi</b> yang digunakan tidak valid.</b><br><br><small>#ERR_KEY</small>'
            )
          } else {
            if (location.hostname.indexOf(ae) == -1) {
              z(
                '<b>Kode Lisensi</b> hanya bisa digunakan pada website dengan domain : <b>' +
                ae +
                '</b><br><br><small>#ERR_DOMAIN</small>'
              )
            } else {
              if (af != $license_item) {
                function ag(ah) {
                  ah = ah.split(' ')
                  for (
                    var ai = 0; ai < ah.length; ai++
                  ) {
                    ah[ai] =
                      ah[ai].charAt(0).toUpperCase() +
                      ah[ai].slice(1)
                  }
                  return (ah = ah.join(' ')), ah
                }
                z(
                  '<b>Kode Lisensi</b> hanya bisa digunakan untuk <b>' +
                  ag($license_item.replaceAll('-', ' ')) +
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
window.onload = function() {
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
    var aj = $('table .cta_link').html().split('<br>')
    if (aj.length && aj[0] != '') {
      for (i in aj) {
        var ak = aj[i].split(',')[0],
          al = aj[i].split(',')[1],
          am = '//' + al.split('/')[2]
        am = am
          .replace('//www.', '')
          .replace('//m.', '')
          .replace('//api.', '')
          .replace('//web.', '')
          .replace('//', '')
        var an =
          '<a class="btn" href="' +
          al +
          '" target="_popwin"><img src="https://www.google.com/s2/favicons?domain=' +
          am +
          '&sz=32" style="float:right;"/>' +
          ak +
          '</a>'
        $(an).appendTo('#pop-cta-link .grid-cta')
      }
      $('.article-right .cta .link').html($('table .cta_link_order').html())
      $('.article-right .cta .link').removeAttr('href')
      $('.article-right .cta .link').attr('target', 'pop-cta-link')
    }
  }
}

function slideshow() {
  $('.slideshow').each(function() {
    var ao = $(this),
      ap = 4000,
      aq = parseInt(ao.attr('data-delay')),
      ar = 1000,
      as = parseInt(ao.attr('data-fade')),
      at
    aq.length && (ap = aq)
    as.length && (ar = as)
    $('.slideshow-item, .widget', ao).length > 1 &&
      ((at = setInterval(function() {
          $('.slideshow-item:visible, .widget:visible', ao).each(
            function() {
              var au = $(this)
              au.hide()
              au.next('.slideshow-item, .widget').length ?
                au.next('.slideshow-item, .widget').fadeIn(ar) :
                au
                .closest('.slideshow')
                .find('.slideshow-item, .widget')
                .first()
                .fadeIn(ar)
            }
          )
        }, ap)),
        $(this).append(
          '  <button class="nav-left">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>  </button>  <button class="nav-right">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>  </button>   '
        ))
    $('.nav-left', ao).on('click', function() {
      clearInterval(at)
      $('.slideshow-item:visible, .widget:visible', ao).each(
        function() {
          var av = $(this)
          av.hide()
          av.prev('.slideshow-item, .widget').length ?
            av.prev('.slideshow-item, .widget').fadeIn(ar) :
            av
            .closest('.slideshow')
            .find('.slideshow-item, .widget')
            .last()
            .fadeIn(ar)
        }
      )
    })
    $('.nav-right', ao).on('click', function() {
      clearInterval(at)
      $('.slideshow-item:visible, .widget:visible', ao).each(
        function() {
          var aw = $(this)
          aw.hide()
          aw.next('.slideshow-item, .widget').length ?
            aw.next('.slideshow-item, .widget').fadeIn(ar) :
            aw
            .closest('.slideshow')
            .find('.slideshow-item, .widget')
            .first()
            .fadeIn(ar)
        }
      )
    })
  })
}

function darkmode() {
  localStorage.getItem('darkmode') == 1 && $('a[href="#darkmode"] i').toggle()
  $('a[href="#darkmode"]').on('click', function(ax) {
    ax.preventDefault()
    $('html').toggleClass('dark')
    $('i', this).toggle()
    localStorage.getItem('darkmode') == 1 ?
      localStorage.setItem('darkmode', 0) :
      localStorage.setItem('darkmode', 1)
    darkmode_head()
  })
}

function post_sort() {
  $('#sort select').on('change', function() {
    $('#sort').addClass('loading')
    if ($(this).val() == 'terbaru') {
      var ay = $('.Blog article')
      ay.sort(function(az, ba) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', ba).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', az).attr('content')
          ).getTime()
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ay)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terlama') {
      var ay = $('.Blog article')
      ay.sort(function(bb, bc) {
        return (
          new Date(
            $('[itemprop="releaseDate"]', bb).attr('content')
          ).getTime() -
          new Date(
            $('[itemprop="releaseDate"]', bc).attr('content')
          ).getTime()
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ay)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'terendah') {
      var ay = $('.Blog article')
      ay.sort(function(bd, be) {
        return (
          $('.harga [data-harga]', bd).attr('data-harga') -
          $('.harga [data-harga]', be).attr('data-harga')
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ay)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
    if ($(this).val() == 'tertinggi') {
      var ay = $('.Blog article')
      ay.sort(function(bf, bh) {
        return (
          $('.harga [data-harga]', bh).attr('data-harga') -
          $('.harga [data-harga]', bf).attr('data-harga')
        )
      })
      setTimeout(function() {
        $('.Blog .is_loop').append(ay)
        $('#sort').removeClass('loading')
        lazyload()
      }, 500)
    }
  })
  $('#sort select').val() != 'terbaru' && $('#sort select').trigger('change')
}

function post_convert() {
  $('article:not(.field_loaded)').each(function() {
    var bi = $(this)
    bi.addClass('field_loaded')
    bi.hasClass('is_post') &&
      $('.field .gambar', this).length &&
      $('.field .gambar img', this).each(function(bj) {
        if (bj > 0) {
          var bk = $(this).attr('src').split('=')[0],
            bl = bk.split('/')[7],
            bm =
            bk.replace(bl, 'w150-h150-c') + '=w150-h150-c',
            bn = bk.replace(bl, 's1000') + '=s1000'
          $('figure.cover', bi).append(
            '<a class="lightbox" href="' +
            bn +
            '"><img data-src="' +
            bm +
            '"/></a>'
          )
        }
      })
    var bo = ''
    $('.field .status', bi).length &&
      (bo = $('.field .status', bi)
        .text()
        .replaceAll('  ', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var bq = ''
    $('.field .harga_normal', bi).length &&
      (bq = $('.field .harga_normal', bi)
        .text()
        .replaceAll(' ', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var bs = ''
    $('.field .harga_diskon', bi).length &&
      (bs = $('.field .harga_diskon', bi)
        .text()
        .replaceAll(' ', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var bt = ''
    $('.field .cta_whatsapp', bi).length &&
      (bt = $('.field .cta_whatsapp', bi)
        .text()
        .replaceAll(' ', '')
        .replaceAll('+', '')
        .replaceAll('-', '')
        .replaceAll(/(?:\r\n|\r|\n)/g, ''))
    var bu = ''
    if (bq) {
      bu += '<div class="harga"><span class="wrap">'
      if (!bi.hasClass('is_post') && bo == 'off') {
        bu +=
          '                        <small class="off">' +
          $_config.cta.order_button_off +
          '</small><span data-harga="' +
          bq +
          '">' +
          format_price(
            bq,
            $_config.local.country_id,
            $_config.local.currency
          ) +
          '</span>                    '
        $('[itemprop="price"]', this).attr('content', bq)
      } else {
        if (bs) {
          var bv = ''
          bs.includes('%') ?
            ((bv = bs.replaceAll('%', '')),
              (bs = Number(bq - (bq * bv) / 100))) :
            (bv = Math.round(100 - (bs / bq) * 100))
          bu +=
            '                            <small class="persen">-' +
            bv +
            '%</small><s>' +
            format_price(
              bq,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</s> <b data-harga="' +
            bs +
            '">' +
            format_price(
              bs,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</b>                        '
          $('[itemprop="price"]', this).attr('content', bs)
        } else {
          bu +=
            '                            <span data-harga="' +
            bq +
            '">' +
            format_price(
              bq,
              $_config.local.country_id,
              $_config.local.currency
            ) +
            '</span>                        '
          $('[itemprop="price"]', this).attr('content', bq)
        }
      }
      bu += '</span></div>'
      bo == 'off' &&
        ($(this).addClass('off'),
          $(this)
          .closest('article')
          .find('[itemprop="availability"]')
          .attr('content', 'https://schema.org/OutOfStock'))
    }
    bi.hasClass('is_post') &&
      (bo == 'off' ?
        (bu +=
          '<div class="cta"><a class="link off" href="#off">' +
          $_config.cta.order_button_off +
          '</a><a class="bagikan" target="pop-bagikan"><i class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg></i></a></div>') :
        (($admin = encodeURIComponent(
            $('[itemprop="author"] b', this).text()
          ).replaceAll('%0A', '')),
          (bw = encodeURIComponent(
            $('h1.title', this).text()
          ).replaceAll('%0A', '')),
          (bu +=
            '<div class="cta"><a class="link" href="https://api.whatsapp.com/send?phone=' +
            (bt ? bt : $_config.cta.whatsapp) +
            '&text=' +
            $_config.cta.order_text
            .replaceAll('[admin]', $admin)
            .replaceAll('[title]', bw) +
            '%0A%0Avia. ' +
            $_config.url.canonical +
            '" target="_popwin"><i class="icon left"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg></i> ' +
            $_config.cta.order_button_text +
            '</a><a class="bagikan" target="pop-bagikan"><i class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg></i></a></div>')))
    var bw = $('.title', this)
    $(bu).insertAfter(bw)
  })
}

function popwin() {
  $(document).on('click', '[target="_popwin"]', function(bx) {
    bx.stopPropagation()
    bx.preventDefault()
    var bz = $(this).attr('href'),
      ca = $(this).attr('data-popwin-width'),
      cb = $(this).attr('data-popwin-height'),
      cc = 960
    ca && (cc = ca)
    var cd = 540
    cb && (cd = cb)
    var ce = Number(screen.width / 2 - cc / 2),
      cf = Number(screen.height / 2 - cd / 2),
      cg = window.open(
        bz,
        '',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' +
        cc +
        ', height=' +
        cd +
        ', top=' +
        cf +
        ', left=' +
        ce
      )
    cg.focus()
  })
}

function shortcode() {
  $('.post-body').each(function() {
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
  $('[data-shortcode]').each(function() {
    var ch = $(this).attr('data-shortcode')
    if (ch == 'img') {
      var ci = $(this).attr('src')
      $(this).wrap('<a class="lightbox" href="' + ci + '"></a>')
    }
    if (ch == 'youtube') {
      var cj = $(this).attr('data-src'),
        ck = cj.split('/')[3]
      cj.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (ck = get_url_parameter('v', cj))
      $(this).attr(
        'data-src',
        'https://www.youtube.com/embed/' + ck + '?rel=0'
      )
    }
  })
}

function etc() {
  $(window).on('beforeunload', function() {
    $('body').addClass('loading')
    setTimeout(function() {
      $('body').removeClass('loading')
    }, 2000)
  })
  $(window).on('scroll', function() {
    $(window).scrollTop() > 0 ?
      $('#header').addClass('shadow') :
      $('#header').removeClass('shadow')
  })
  $('.LinkList li a[href*="#"]').each(function() {
    $(this).attr('href', 'javascript:void(0)')
    $(this).append(
      '<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>'
    )
    var cl = $(this).parent('li')
    cl.addClass('dropdown')
    cl.wrapInner('<span class="dropdown-title"></span>')
    cl.append('<ul class="sub"></ul>')
  })
  $('.LinkList li a:contains("_")').each(function() {
    var cm = $(this).parent('li').prev('.dropdown').find('ul')
    $(this).parent('li').appendTo(cm)
    var cn = $(this).text().replaceAll('_', '').replaceAll('_ ', '')
    $(this).text(cn)
  })
  $('.LinkList').on('click', 'li.dropdown', function() {
    $(this).find('ul:first').toggle()
    $(this).toggleClass('active')
  })
  $('[data-feed]').length &&
    $('[data-feed]').each(function() {
      var co = $(this),
        cp = $(this).attr('data-feed')
      co.addClass('loading')
      co.load(cp + ' .is_loop', function() {
        var cq = $(this).html()
        co.html(cq)
        var cr = co.attr('data-hide-id')
        cr &&
          (co.find('article#' + cr).length ?
            co.find('article#' + cr).remove() :
            co.find('article:last-of-type').remove())
        post_convert()
        lazyload()
        timeago()
        co.removeClass('loading')
      })
    })
  $('#pop-bagikan .copy button').on('click', function(cs) {
    var ct = $(this)
    ct.siblings('input').select()
    document.execCommand('copy')
    ct.text('Disalin!')
    setTimeout(function() {
      ct.text('Salin')
    }, 2000)
  })
  if (window.location.hash) {
    if ($(window.location.hash).length) {
      var cu = $('#header').outerHeight(),
        cv = $('.is_single article .attr-sticky').outerHeight()
      $('html, body')
        .stop()
        .animate({
            scrollTop: $(window.location.hash).offset().top - cu - cv - 20,
          },
          500
        )
      $(window.location.hash).addClass('focus')
      setTimeout(function() {
        $(window.location.hash).removeClass('focus')
      }, 2000)
    }
  }
  $(document).on('click', 'a[href*="#"]', function(cw) {
    var cx = '#' + $(this).attr('href').split('#')[1]
    if ($(cx).length && $(this).attr('href').split('#')[0] === '') {
      cw.preventDefault()
      var cy = $('#header').outerHeight(),
        cz = $('.is_single article .attr-sticky').outerHeight()
      cz
        ?
        $('html, body')
        .stop()
        .animate({
            scrollTop: $(cx).offset().top - cy - cz - 20,
          },
          500
        ) :
        $('html, body')
        .stop()
        .animate({
            scrollTop: $(cx).offset().top - cy - 20
          },
          500
        )
      $(cx).addClass('focus')
      setTimeout(function() {
        $(cx).removeClass('focus')
      }, 2000)
    }
  })
  $(document).on('click', '.loadmore-btn', function(da) {
    da.preventDefault()
    let db = $(this).attr('href'),
      dc = $('#blog-pager .loadmore-btn'),
      dd = $('#blog-pager .loadmore-btn').text()
    db &&
      $.ajax({
        url: db,
        beforeSend: function() {
          dc.addClass('loading')
        },
        complete: function() {
          dc.removeClass('loading')
        },
        success: function(de) {
          let df = $(de).find('.Blog .is_loop').html(),
            dg = $(de).find('.loadmore-btn').attr('href')
          $('.Blog .is_loop').append(df)
          dc.show()
          post_convert()
          post_sort()
          lazyload()
          timeago()
          dg ? dc.attr('href', dg) : dc.fadeOut()
        },
      })
  })
  if ($_config.url.view == 'single') {
    var dh = $('a.blog-pager-older-link').text(),
      di = $('a.blog-pager-older-link').attr('href')
    $('a.blog-pager-older-link').load(di + ' article h1', function() {
      var dj = $('a.blog-pager-older-link').text()
      $('a.blog-pager-older-link').html(
        '<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>' +
        dh +
        '</b></small><h3>' +
        dj +
        '</h3></div></div>'
      )
      $('a.blog-pager-older-link > figure').load(
        di + ' article .post-body img:first-of-type',
        function() {
          var dk = $(this).html(),
            dl = dk.split('src="')[1],
            dm = dl.split('"')[0],
            dn = dm.split('=')[0],
            dp = dn.split('/')[7]
          dn =
            dn.replace(dp, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-older-link > figure')
            .html('<img src="' + dn + '"/>')
            .removeClass('loading')
        }
      )
    })
    var dq = $('a.blog-pager-newer-link').text(),
      dr = $('a.blog-pager-newer-link').attr('href')
    $('a.blog-pager-newer-link').load(dr + ' article h1', function() {
      var ds = $('a.blog-pager-newer-link').text()
      $('a.blog-pager-newer-link').html(
        '<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>' +
        dq +
        '</b></small><h3>' +
        ds +
        '</h3></div></div>'
      )
      $('a.blog-pager-newer-link > figure').load(
        dr + ' article .post-body img:first-of-type',
        function() {
          var dt = $(this).html(),
            du = dt.split('src="')[1],
            dv = du.split('"')[0],
            dw = dv.split('=')[0],
            dx = dw.split('/')[7]
          dw =
            dw.replace(dx, 'w100-h100-c') + '=w100-h100-c'
          $('a.blog-pager-newer-link > figure')
            .html('<img src="' + dw + '"/>')
            .removeClass('loading')
        }
      )
    })
  }
}

function timeago() {
  $('[datetime]:not(.timeago)').each(function() {
    var dy = $(this),
      dz = dy.attr('datetime')
    dy.addClass('timeago') !dy.attr('title') && dy.attr('title', dz)
    dy.text(ea(dz))
  })

  function ea(eb) {
    var ec = 'ago',
      ed = 'seconds',
      ee = 'minutes',
      ef = 'hours',
      eg = 'days',
      eh = 'months',
      ei = 'years'
    $_config.local.country_id == 'id-ID' &&
      ((ec = 'yang lalu'),
        (ed = 'detik'),
        (ee = 'menit'),
        (ef = 'jam'),
        (eg = 'hari'),
        (eh = 'bulan'),
        (ei = 'tahun'))
    var ej = new Date(eb),
      ek = 86400000,
      el = 30 * ek,
      em = 365 * ek,
      en = ec,
      eo = new Date() - ej
    return eo < 60000 ?
      Math.round(eo / 1000) + ' ' + ed + ' ' + en :
      eo < 3600000 ?
      Math.round(eo / 60000) + ' ' + ee + ' ' + en :
      eo < ek ?
      Math.round(eo / 3600000) + ' ' + ef + ' ' + en :
      eo < el ?
      Math.round(eo / ek) + ' ' + eg + ' ' + en :
      eo < em ?
      Math.round(eo / el) + ' ' + eh + ' ' + en :
      Math.round(eo / em) + ' ' + ei + ' ' + en
  }
  $('#comments .datetime a:not(.timeago)').each(function() {
    var ep = $(this),
      eq = ep.text()
    ep.attr('datetime', eq)
    var er = ep.attr('datetime')
    ep.addClass('timeago')
    ep.attr('title', er)
    ep.text(ea(er))
  })
}

function format_price(es, et, eu) {
  return new Intl.NumberFormat(et, {
    style: 'currency',
    currency: eu,
    maximumSignificantDigits: 3,
  }).format(es)
}

function separator(ev, ew = '') {
  var ex = '',
    ey = ev.toString().split('').reverse().join('')
  for (var ez = 0; ez < ey.length; ez++) {
    if (ez % 3 == 0) {
      ex += ey.substr(ez, 3) + '.'
    }
  }
  return ew ?
    ew +
    ' ' +
    ex
    .split('', ex.length - 1)
    .reverse()
    .join('') :
    ex
    .split('', ex.length - 1)
    .reverse()
    .join('')
}

function pop() {
  $('[target=pop-video]').length &&
    (($pop_video_html =
        ' <div id="pop-video" data-pop-title="Video" data-pop-width="960">   <div class="video">  <iframe allowfullscreen="true"></iframe>   </div> </div> '),
      $($pop_video_html).appendTo('body'))
  $('[id*="pop-"]:not(".pop-loaded")').each(function() {
    var fa = $(this),
      fb = fa.attr('id'),
      fc = fa.attr('data-pop-title'),
      fd = fa.attr('data-pop-width'),
      fe = fa.attr('data-pop-height')
    fa.wrap('<div class="pop"></div>')
    fa.wrap('<div class="pop-wrap"></div>')
    fa.addClass('pop-content pop-loaded')
    var ff =
      '   <header class="pop-header">  <div class="pop-title">    <h3>   ' +
      fc +
      '    </h3>  </div>  <div class="pop-close">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>  </div>   </header> '
    fa.closest('.pop-wrap').prepend(ff)
    fd && fa.closest('.pop-wrap').css('width', fd)
  })
  $('.pop-close').on('click', function() {
    $(this).closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('[id=pop-video] iframe').length &&
      $('[id=pop-video] iframe').attr('src', '')
  })
  $(document).on('click', '[target*="pop-"]', function(fg) {
    fg.preventDefault()
    var fh = $(this),
      fi = fh.attr('target'),
      fj = fh.attr('data-pop-title') ?
      fh.attr('data-pop-title') :
      $('#' + fi).attr('data-pop-title'),
      fk = fh.attr('data-pop-width'),
      fl = fh.attr('data-pop-height')
    fh.closest('.pop').removeClass('open')
    $('body').removeClass('pop-open')
    $('#' + fi).length &&
      ($('body').addClass('pop-open'),
        $('#' + fi)
        .closest('.pop')
        .addClass('open'),
        fh.closest('.pop-content').length &&
        (($back_id = fh.closest('.pop-content').attr('id')),
          (fj =
            '<a target="' +
            $back_id +
            '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' +
            fj)),
        fj &&
        $('#' + fi)
        .closest('.pop')
        .find('.pop-title h3')
        .html(fj),
        $('[data-src]').each(function() {
          var fm = $(this).attr('data-src')
          $(this).attr('src', fm).removeAttr('data-src')
        }))
    if (fi == 'pop-video') {
      $href = $(this).attr('href')
      var fn = $href.split('/')[3]
      $href.indexOf('https://www.youtube.com/watch?v=') >= 0 &&
        (fn = get_url_parameter('v', $href))
      $('[id=pop-video] iframe').attr(
        'src',
        'https://www.youtube.com/embed/' + fn + '?autoplay=1&showinfo=0'
      )
    }
  })
  $(document).on('click', '.pop.open', function() {
    $(this).find('.pop-close').trigger('click')
  })
  $(document).on('click', '.pop-wrap', function(fo) {
    fo.stopPropagation()
  })
}

function lightbox() {
  $('.lightbox-auto').length &&
    $('.lightbox-auto').each(function() {
      $('img', this)
        .closest('a')
        .each(function() {
          $(this).addClass('lightbox')
        })
    })
  if ($('.lightbox:not([target])').length) {
    var fp = '   <div id="lightbox">  <figure></figure>   </div> '
    $('body').append(fp)
    $(document).on('click', '.lightbox:not([target])', function(fq) {
      fq.preventDefault()
      var fr = $(this).attr('href')
      $('#lightbox').addClass('open')
      $('#lightbox figure').addClass('loading')
      $('#lightbox figure').html('<img src="' + fr + '"/>')
      $('#lightbox figure img').on('load', function() {
        $('#lightbox figure').removeClass('loading')
        $(this).addClass('open')
      })
    })
    $(document).on('click', '#lightbox', function(fs) {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
    $(window).on('scroll', function() {
      $('#lightbox').removeClass('open')
      $('#lightbox img').remove()
    })
  }
}

function lazyload() {
  $('[data-bg]').each(function() {
    var ft = $(this),
      fu = ft.attr('data-bg')
    ft
      .css('background-image', 'url(' + fu + ')')
      .removeAttr('data-bg')
  })
  $('[data-src]:not([lazy="true"])').each(function() {
    var fv = $(this),
      fw = $(window).height(),
      fx = $(window).scrollTop(),
      fy = fx + fw,
      fz = fv.offset().top
    fv.attr('data-offset-top', fz)
    var ga = fv.attr('data-src')
    ga = ga.replace(
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    ga = ga.replace(
      '2.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    ga = ga.replace(
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    ga = ga.replace(
      '4.bp.blogspot.com',
      'lh3.googleusercontent.com'
    )
    var gb = fv.prop('tagName').toLowerCase()
    if (fz <= fy) {
      if (gb == 'img') {
        fv.attr('src', ga).removeAttr('data-src')
        fv.attr('lazy', 'true')
      } else {
        gb == 'iframe' &&
          (fv.attr('src', ga).removeAttr('data-src'),
            fv.attr('lazy', 'true'))
      }
    }
  })
  $(window).on('scroll', function() {
    var gc = $(window).height(),
      gd = $(window).scrollTop(),
      ge = gd + gc
    $('[data-src]:not([lazy="true"])').each(function() {
      var gf = $(this),
        gg = $(window).height(),
        gh = gf.offset().top,
        gi = gf.attr('data-src')
      gi = gi.replace(
        '1.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      gi = gi.replace(
        '2.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      gi = gi.replace(
        '3.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      gi = gi.replace(
        '4.bp.blogspot.com',
        'lh3.googleusercontent.com'
      )
      var gj = gf.prop('tagName').toLowerCase()
      if (gh <= ge) {
        if (gj == 'img') {
          gf.attr('src', gi).removeAttr('data-src')
          gf.attr('lazy', 'true')
        } else {
          gj == 'iframe' &&
            (gf.attr('src', gi).removeAttr('data-src'),
              gf.attr('lazy', 'true'))
        }
      }
    })
  })
}

function titleCase(gk) {
  gk = gk.split(' ')
  for (var gl = 0; gl < gk.length; gl++) {
    gk[gl] =
      gk[gl].charAt(0).toUpperCase() +
      gk[gl].slice(1)
  }
  return (gk = gk.join(' ')), gk
}

function $_GET(gm) {
  var gn = window.location.search.substring(1),
    go = gn.split('&'),
    gp,
    gq
  for (gq = 0; gq < go.length; gq++) {
    gp = go[gq].split('=')
    if (gp[0] === gm) {
      return gp[1] === undefined ?
        true :
        decodeURIComponent(gp[1])
    }
  }
}

function get_url_parameter(gr, gs) {
  gr = gr.replace(/[\[\]]/g, '\\$&')
  var gt = new RegExp('[?&]' + gr + '(=([^&#]*)|&|#|$)'),
    gu = gt.exec(gs)
  if (!gu) {
    return null
  }
  if (!gu[2]) {
    return ''
  }
  return decodeURIComponent(gu[2].replace(/\+/g, ' '))
}
