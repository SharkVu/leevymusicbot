import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Music, Play, Users, Zap, Heart, Star, Headphones } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Floating Music Notes - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-1/4 text-primary/30 float-animation">
        <Music size={24} />
      </div>
      <div
        className="hidden sm:block absolute top-40 right-1/3 text-secondary/30 float-animation"
        style={{ animationDelay: "2s" }}
      >
        <Music size={20} />
      </div>
      <div
        className="hidden sm:block absolute bottom-40 left-1/3 text-accent/30 float-animation"
        style={{ animationDelay: "4s" }}
      >
        <Music size={28} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <Image
                  src="/leevy-avatar.png"
                  alt="LeeVy Music Bot"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12 rounded-full pulse-glow"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-foreground">LeeVy Music Bot</h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Người Bạn Âm Nhạc Discord Của Bạn
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden md:flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Trực Tuyến & Sẵn Sàng
            </Badge>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Avatar */}
            <div className="relative mb-8 sm:mb-12">
              <div className="relative inline-block">
                <Image
                  src="/leevy-avatar.png"
                  alt="LeeVy Music Bot Avatar"
                  width={150}
                  height={150}
                  className="sm:w-[200px] sm:h-[200px] rounded-full mx-auto pulse-glow float-animation"
                />
                {/* Music Wave Bars */}
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 flex items-end gap-1">
                  <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-primary rounded-full music-wave"></div>
                  <div className="w-1.5 sm:w-2 h-4 sm:h-6 bg-secondary rounded-full music-wave"></div>
                  <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-primary rounded-full music-wave"></div>
                  <div className="w-1.5 sm:w-2 h-4 sm:h-6 bg-secondary rounded-full music-wave"></div>
                  <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-primary rounded-full music-wave"></div>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-balance leading-tight">
                <span className="text-foreground">Âm Nhạc</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Không Giới Hạn
                </span>
              </h2>

              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Biến máy chủ Discord của bạn thành trải nghiệm âm nhạc cao cấp. Âm thanh trong veo, điều khiển mượt mà
                và giải trí bất tận đang chờ đón bạn.
              </p>

              {/* Musical Slogans */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0">
                <Badge variant="outline" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                  🎵 Âm Nhạc Là Cuộc Sống
                </Badge>
                <Badge variant="outline" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                  🎧 Nghe Là Mê
                </Badge>
                <Badge variant="outline" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                  🎶 Vibe Chuẩn Không Cần Chỉnh
                </Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto max-w-sm"
                asChild
              >
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1377450661171433472&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Play size={20} className="sm:w-6 sm:h-6" />
                  Mời Vào Máy Chủ
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Tại Sao Chọn LeeVy?</h3>
            <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl mx-auto px-4 sm:px-0">
              Trải nghiệm âm nhạc như chưa từng có với các tính năng được thiết kế cho trải nghiệm Discord tối ưu
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="text-primary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground">Âm Thanh Trong Veo</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Phát trực tuyến chất lượng cao không độ trễ. Từng nốt nhạc, từng nhịp đập, được truyền tải hoàn hảo.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="text-secondary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground">Nhanh Như Chớp</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Phản hồi tức thì, tìm kiếm nhanh chóng và phát nhạc mượt mà. Âm nhạc với tốc độ tư duy.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-center space-y-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-accent" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground">Tập Trung Cộng Đồng</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Được xây dựng cho mọi quy mô máy chủ. Quản lý hàng đợi, bình chọn và danh sách phát cộng tác.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-border/50">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Được Tin Tưởng Bởi Những Người Yêu Nhạc
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
                Tham gia cùng hàng nghìn máy chủ Discord đã cùng vui với LeeVy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">10K+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Máy Chủ Hoạt Động</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">1M+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Bài Hát Đã Phát</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">24/7</div>
                <div className="text-sm sm:text-base text-muted-foreground">Thời Gian Hoạt Động</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Sẵn Sàng Nâng Tầm Máy Chủ Của Bạn?
            </h3>
            <p className="text-base sm:text-xl text-muted-foreground text-balance px-4 sm:px-0">
              Tham gia cuộc cách mạng âm nhạc. Thêm LeeVy vào máy chủ Discord và để âm nhạc bùng nổ.
            </p>

            <div className="flex justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto max-w-sm"
                asChild
              >
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1377450661171433472&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Heart size={20} className="sm:w-6 sm:h-6" />
                  Thêm LeeVy Ngay
                </a>
              </Button>
            </div>

            {/* Musical Quote */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-muted/20 rounded-xl sm:rounded-2xl border border-border/30 mx-4 sm:mx-0">
              <p className="text-base sm:text-lg italic text-muted-foreground text-balance">
                "Âm nhạc kết nối tâm hồn. LeeVy kết nối bạn với âm nhạc yêu thích mọi lúc mọi nơi."
              </p>
              <div className="flex items-center justify-center gap-1 mt-4">
                <Star className="text-secondary fill-current" size={14} />
                <Star className="text-secondary fill-current" size={14} />
                <Star className="text-secondary fill-current" size={14} />
                <Star className="text-secondary fill-current" size={14} />
                <Star className="text-secondary fill-current" size={14} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-border/30">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Image
                src="/leevy-avatar.png"
                alt="LeeVy Music Bot"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8 rounded-full"
              />
              <span className="text-base sm:text-lg font-semibold text-foreground">LeeVy Music Bot</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
              Mang hòa âm đến các máy chủ Discord trên toàn thế giới
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <span>© 2024 LeeVy Bot Community</span>
              <span className="hidden sm:inline">•</span>
              <span>Được tạo với ❤️ cho những người yêu nhạc</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
